import Modal from 'react-modal';
import InputMask from 'react-input-mask';
import { alterStorageValue } from '../Users';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display: 'block'
    },
  };
  
  Modal.setAppElement('#root');


const ModalPopup = (props: any) => {
    let subtitle: HTMLHeadingElement | null;

    function afterOpenModal() {
        subtitle!.style.color = '#f00';
    }

    function closeModal() {
        props.handleClose(false)
    }

    return (
        <div>
        <Modal
            isOpen={props.isOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Modal"
        >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Alterar Usuário</h2>
            <a onClick={closeModal}><b>X</b></a>
            <form>
            <br/>
            <h5>Nome</h5>
            <input id='name' placeholder='Insira seu nome' onChange={(e: any) => {}}/>
            <h5>Telefone</h5>
            <InputMask 
                mask='(+55) 9999999-9999' 
                id='phone'
                placeholder='Insira seu telefone'
                onChange={(e: any) => {}}>
            </InputMask>
            <h5>CPF</h5>
            <InputMask 
                className='input-cpf'
                mask='999.999.999-99' 
                disabled
                id='cpf'
                placeholder='Insira seu CPF'
                onChange={(e: any) => {}}>
            </InputMask>
            <h5>Email</h5>
            <input id='email' placeholder='Insira seu email' onChange={(e: any) => {}}/>
            <br/><br/>
            <button type='submit' className="btn btn-primary" onClick={(e) => {
                e.preventDefault()
                //@ts-ignore
                const name = document.getElementById("name")!.value
                //@ts-ignore
                const phone = document.getElementById("phone")!.value
                //@ts-ignore
                const cpf = document.getElementById("cpf")!.value
                //@ts-ignore
                const email = document.getElementById("email")!.value
                const data = { name: name, email: email, phone, cpf: cpf }
                props.updateUser(alterStorageValue("user",cpf, [data]))
                closeModal()
                alert('Usuário Alterado!')
            }}>Salvar Alterações</button>
            </form>
            
        </Modal>
        </div>
    );
}

export default ModalPopup;