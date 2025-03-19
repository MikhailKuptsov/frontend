import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";
import Cookies from 'js-cookie';
//Персональные компоненты





export default function Main_page_p(){
    let flag_admin="Admin";
    let flag_user="user";
    // const [username_1, setUsername_1] = useState(Cookies.get('username_data') || '')
    let username_1 = Cookies.get('username_data');
    //перевод данных в json формат
    const user_attributes=JSON.parse(username_1)
    console.log(user_attributes)
    // let username_2=username_1.json()
    // if (user_attributes.role==="Admin"){}
        return (
            <>
            <Main_Header/>
            <div >
            
            <p>добро пожаловать</p>
            {/* <p>{username_1}</p> */}
            <p>{user_attributes.role}</p>
            {flag_admin===user_attributes.role?<p>Добро пожаловать Администратор</p>:null}

            </div>
            <UnderBar/>
            </>
        );
};
