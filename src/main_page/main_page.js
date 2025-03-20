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
import Block_info_form from "./Block_info_form";
import Block_planned_audit from "./Block_planned_audit";
import Block_audit_history_v2 from "./Block_audit_history_v2";
import Block_audit_history_user from "./Block_audit_history_user";
import Big_button from './Big_button'

//стили
import "./main_page_css.css"





export default function Main_page(){
    let username_1 = Cookies.get('username_data');
    //перевод данных в json формат
    const user_attributes=JSON.parse(username_1);
    console.log(user_attributes);
    let flag=user_attributes.role
    return (
            <>
            <Main_Header/>
            <div className="block_page">
                
                {/* Приветствующая карточка */}
                <Card className="main_page_card_title">
                    <Card.Body>
                        <h3>Добро пожаловать {user_attributes.username}</h3>
                        {/* <p>{username_1}</p> */}
                    </Card.Body>
                </Card>

                {/* здесь будут компоненты */}
                {flag==="Admin"?<Block_info_2/>:null}

                {flag==="Admin"?<Block_planned_audit/>:null}

                {flag==="Admin"?<Block_info_form/>:null}
                {flag==="Admin"?<Block_audit_history_user/>:null}
                {flag==="Admin"?<Block_audit_history_v2/>:null}
                {flag==="Admin"?<Big_button info={{label:"Изменение  формулировок текста ДК ТОС", text_info:'Редактирование и создание новых тестов для аудитов'}}/>:null}
                

               

               
            </div>
            <UnderBar/>
            </>
        );
};
