import React, { useEffect, useState } from 'react';
import api from '../../Services/api';

import { Container, Form } from './styles';

export default function Nickname({setUser, setId, setShowPortal}) {
    
    const [ login, setLogin ] = useState(false);
    const [ isLegged, setIsLogged ] = useState(false);
    
    const [name, setName ] = useState('');
    const [nickname, setNickname ] = useState('');
    const [password, setPassword ] = useState('');


    useEffect(() => {
        let storage = JSON.parse(localStorage.getItem("user"));

        if(storage !== null){
            setShowPortal(false);
        }
    }, []);

    const handleNickName = (event) =>{
        setNickname((event.target.value).toLowerCase());
    }
    const handlePass = (event) =>{
        setPassword((event.target.value));
    }
    
    const handleSubmitRegister = async (event) => {
        event.preventDefault();

        const response = await api.post('/user', {name, nickname, password});
        console.log(response);

        if(response.status !== 200){

            alert(response.data);
            setPassword("");

        }else{
            const { id, nickname } = response.data;
            setUser( nickname );
            setId( id );
            localStorage.setItem("user", JSON.stringify(nickname, id));

            setIsLogged(true);
            
            setTimeout(() => {

                setShowPortal(false);
            }, 450);
        }
    }

    const handleSubmitLogin = async (event) => {
        event.preventDefault();
//         const USERFINDED = 200;

//         const response = await api.post(`/user/login?nickname=${nickname}&password=${password}`);
//         console.log(response);

//         if(response.status !== USERFINDED)
//         {
//             alert("Nickname or password invalids.");
//             setNickname("");
//             setPassword("");
            
//         }else{

//             setShowPortal(false);
//         }
        
        setUser( nickname );
        setId( Math.floor(Math.random() * 256));

        localStorage.setItem("user", JSON.stringify(nickname));
        
        setIsLogged(true);
            
            setTimeout(() => {

                setShowPortal(false);
            }, 450);
    }

    let logged = isLegged && 'logged';
    return (
        <Container className={logged}>
            { login ?
            <>
                <Form onSubmit={handleSubmitLogin}>
                    <label htmlFor="Login"> Fa??a Login </label>

                    <input type="text" name="nickname" placeholder="Seu usu??rio" value={nickname} onChange={handleNickName} className="inputLogin" required/>
                    <input type="password" name="password" placeholder="Senha" value={password} onChange={handlePass} className="inputLogin" required/>
                    
                    <input type="submit" value="Entrar" className="btnSubmit" onSubmit={handleSubmitLogin}/>
                </Form>
                
                
                <p onClick={() => setLogin(false)}>Me Registrar</p>
            </>
                :
            <>
                <Form onSubmit={handleSubmitRegister}>

                    <label htmlFor="Register"> Registrar </label>
                    
                    <input type="name" name="registerName" placeholder="Seu Nome" value={name} onChange={(event) => setName(event.target.value)} required/>
                    <input type="text" name="registerNickname" placeholder="Nome de usu??rio" value={nickname} onChange={(event) => setNickname(event.target.value)} required/>
                    <input type="password" name="registerPass" placeholder="Senha de acesso" value={password} onChange={(event) => setPassword(event.target.value)} required/>
                    
                    <input type="submit" value="Registrar" className="btnSubmit" onSubmit={handleSubmitLogin}/>
                
                </Form>
                <p onClick={() => setLogin(true)}>Ir para Login</p>
            </>
            }
            
        </Container>
    )
}
