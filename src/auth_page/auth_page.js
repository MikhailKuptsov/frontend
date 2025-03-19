import React, {useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button,  Form, Card, Stack } from "react-bootstrap";
import axios from 'axios';
import Cookies from 'js-cookie';

import Warning_password from './warning';
import "./auth_page_style.css";

export default function Auth_page(){
    //хук с данными о пользователе
    const [data, setData] = useState({ username_or_email: "", password: "" });
    //Хук с информацией об ошибке
    const [error, setError] = useState('');


    //предупреждение о нажатом CapsLock
    const [capsLockActive, setCapsLockActive] = useState(false);
    const handleKeyDown = (event) => {
        setCapsLockActive(event.getModifierState('CapsLock'));
      };

    //сохранение/обновление данных из формы
    const handleChange=(event)=>{
        setData({...data, [event.target.name]:event.target.value})
    }

    //переадресация на главную страницу при успешной авторизации
    const navigate = useNavigate();


    //отправка данных на бэк
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post("https://9l1rs9ln-8000.euw.devtunnels.ms/auth/login", data)
        .then(response => {
            // handle success
            //сохранение данных о пользователе
            Cookies.set('username_data', JSON.stringify(response.data) , { expires: 1 })
            // console.log(response.data);
            //Проверка что cookie создан
            // console.log(Cookies.get())
            navigate('/Main_page')
        })
        .catch(error => {
            // handle error
            setError("Неверный логин или пароль");
            console.error(error);
        });
    }


    return(
        <>
        <div className='block_page_auth'>
            <Card className='card_block'>
            <form onSubmit={handleSubmit}>
                <h2>Авторизация</h2>
                {error && (<p className="warning_p">Неправильно введен логин или пароль</p>)}
                <label>Логин:</label>
                <input 
                // type='email'
                type='text'
                className='auth_input'
                name='username_or_email'
                value={data.username_or_email}
                onChange={handleChange} required
                /><br/>
                <label>Пароль:</label><br/>
                <input
                type='password'
                className='auth_input'
                name='password'
                value={data.password}
                onChange={handleChange}
                onKeyDown={handleKeyDown} 
                onKeyUp={handleKeyDown} required/><br/>
                {capsLockActive && (<p className="warning_p">*У вас нажат CapsLock</p>)}
                <Button className='auth_button' type='submit' variant='outline-dark'>Отправить</Button>
                <Warning_password/>
            </form>
            </Card>
        </div>
        </>
    )
}