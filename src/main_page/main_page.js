import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Accordion } from "react-bootstrap";
//общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

//Cookies
import Cookies from 'js-cookie';
//Персональные компоненты
import Block_info_2 from "./Block_info_2";

//стили
import "./main_page_css.css"





export default function Main_page(){
    let username_1 = Cookies.get('username_data');
    //перевод данных в json формат
    const user_attributes=JSON.parse(username_1);
    console.log(user_attributes);
    return (
            <>
            <Main_Header/>
            <div className="block_page">
                
                {/* Приветствующая карточка */}
                <Card className="main_page_card">
                    <Card.Body>
                        <h4>Добро пожаловать {user_attributes.username}</h4>
                        {/* <p>{username_1}</p> */}
                    </Card.Body>
                </Card>
                {/* здесь будут компоненты */}
                <Block_info_2/>
               

               
            </div>
            <UnderBar/>
            </>
        );
};
