import './UserTable.scss'
import { api } from '../../Services/Api';
import { useEffect, useState } from 'react';
import { useLocalStorage, removeStorageValue } from '../Users';
import Modal from '../Modal';

const UserTable = () => {
    const [user, setUser] = useLocalStorage("user", "")
    const [modalIsOpen, setIsOpen] = useState(false);

    /*
    const data = [
      { name: "John", email: "john@gmail.com", phone: 12, cpf: "Male" },
      { name: "Bren", email: "bren@gmail.com", phone: 24, cpf: "Male" },
      { name: "Marry", email: "marry@gmail.com", phone: 18, cpf: "Female" },
      { name: "Shohail", email: "shohail@gmail.com", phone: 25, cpf: "Male" },
      { name: "Aseka", email: "aseka@gmail.com", phone: 19, cpf: "Female" },
      { name: "Meuko", email: "meuko@gmail.com", phone: 12, cpf: "Female" },
    ];
    */

    useEffect(() => {
      if (user.length === 0) {
        api.get("users").then(response => {
          setUser(response.data.users)
        })
      }
    },[user, setUser])

    
    var tableData = Object.keys(user).map(function(key) {
        return (
        <tr key={user[parseInt(key)]["cpf"]}>
          <td>{user[parseInt(key)]["name"]}</td>
          <td>{user[parseInt(key)]["phone"]}</td>
          <td>{user[parseInt(key)]["cpf"]}</td>
          <td>{user[parseInt(key)]["email"]}</td>
          <td><button className='button-edit btn btn-primary' type="button" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => {
            const observer = new MutationObserver((mutations, obs) => {
            const name = document.getElementById('name');
            if (name) {
              // @ts-ignore
              name.value = user[parseInt(key)]["name"];
              // @ts-ignore
              document.getElementById('phone')!.value = user[parseInt(key)]["phone"];
              // @ts-ignore
              document.getElementById('cpf')!.value = user[parseInt(key)]["cpf"];
              // @ts-ignore
              document.getElementById('email')!.value = user[parseInt(key)]["email"];
              obs.disconnect();
              return;
            }
            });
            observer.observe(document, {
              childList: true,
              subtree: true
            });
            if (modalIsOpen){
              closeModal()
            } else {
              openModal()
            }
          }}>Editar</button></td>
          <td><button className='button-remove' onClick={() => {
            setUser(removeStorageValue("user",user[parseInt(key)]["cpf"]))
            alert('Usuário Removido!')
            }}>Excluir</button></td>
        </tr>
        )
    });

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }
      
    return (
        <><>
      </><Modal isOpen={modalIsOpen} handleClose={setIsOpen} updateUser={setUser}/><table className='UserTable'>
          <tbody>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>CPF</th>
            <th>Email</th>
          </tr>
          {tableData}
          </tbody>
        </table>
        </>
      );
}

export default UserTable;