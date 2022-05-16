import Header from "../../Components/Header";
import InputMask from 'react-input-mask';
import "./Register.scss"
import { createStorageValue } from "../../Components/Users";
import { nameValidate, phoneValidate, cpfValidate, emailValidate } from "../../Components/InputValidate";
import { useEffect, useState } from "react";

const Register = () => {
    const [nameError, setNameError] = useState([true,<></>])
    const [phoneError, setPhoneError] = useState([true,<></>])
    const [cpfError, setCpfError] = useState([true,<></>])
    const [emailError, setEmailError] = useState([true,<></>])

    useEffect(() => {
        if(nameError[0] || phoneError[0] || cpfError[0] || emailError[0]){
            // @ts-ignore
            document.querySelector('button[type="submit"]').disabled = true
        } else {
            // @ts-ignore
            document.querySelector('button[type="submit"]').disabled = false
        }
    },[nameError,phoneError,cpfError,emailError])

    return (
        <>
        <Header/>
        <div className="UserRegister">
        <form>
            <br/>
            <h5>Nome</h5>
            <input id="name" placeholder='Insira seu nome' onChange={(e: any) => {
                const validation = nameValidate(e.target.value)
                if (!validation[0]) {
                    setNameError([true,<><br/><b className="alert alert-danger h6 pb-0 text-center" role="alert">{validation[1]}</b></>])
                } else {
                    setNameError([false,<></>])
                }
                }} />
            {nameError[1]}
            <h5>Telefone</h5>
            <InputMask 
                mask='(+55) 9999999-9999' 
                id="phone"
                placeholder='Insira seu telefone'
                onChange={(e: any) => {
                    const validation = phoneValidate(e.target.value)
                    if (!validation[0]) {
                        setPhoneError([true,<><br/><b className="alert alert-danger h6 pb-0 text-center" role="alert">{validation[1]}</b></>])
                    } else {
                        setPhoneError([false,<></>])
                    }
                    }}>
            </InputMask>
            {phoneError[1]}
            <h5>CPF</h5>
            <InputMask 
                className='input-cpf'
                id="cpf"
                mask='999.999.999-99'
                placeholder='Insira seu CPF'
                onChange={(e: any) => {
                const validation = cpfValidate(e.target.value)
                if (!validation[0]) {
                    setCpfError([true,<><br/><b className="alert alert-danger h6 pb-0 text-center" role="alert">{validation[1]}</b></>])
                } else {
                    setCpfError([false,<></>])
                }
                }}>
            </InputMask>
            {cpfError[1]}
            <br/>
            <h5>Email</h5>
            <input id="email" placeholder='Insira seu email' onChange={(e: any) => {
                const validation = emailValidate(e.target.value)
                if (!!!validation[0]) {
                    setEmailError([true,<><br/><b className="alert alert-danger h6 pb-0 text-center" role="alert">{validation[1]}</b></>])
                } else {
                    setEmailError([false,<></>])
                }
                }}/>
            {emailError[1]}
            <br/><br/>
            <button type='submit' className="btn btn-success" onClick={(e) => {
                e.preventDefault()
                //@ts-ignore
                const name = document.getElementById("name")!.value
                //@ts-ignore
                const phone = document.getElementById("phone")!.value
                //@ts-ignore
                const cpf = document.getElementById("cpf")!.value
                //@ts-ignore
                const email = document.getElementById("email")!.value
                const data = [{ name: name, email: email, phone, cpf: cpf }]
                createStorageValue('user', data)
                alert('Usuário Cadastrado!')
            }}>Cadastrar Usuário</button>
            </form>
        </div>
        </>
    )
}

export default Register;