import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Row, Col, Form, FormControl, Dropdown, Stack} from "react-bootstrap";
//Общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";
//Персональные компоненты
// import Person_card from "./Card_person";
import Person_card_1 from './Card_person_v2';

import { getUsers } from './admin_users_data_3';

//Стили
import "./Admin_page_style.css"




export default function Admin_page_6() {
    const [usersData,setUsersData]=useState([])

    let users_data=(getUsers())
    console.log(users_data)
    

    return (
        <div>
            <Main_Header/>
            <div className="block_page_1">
            <p>Пока тут ничего нет</p>
            {/* {users_data} */}
            </div>
            <UnderBar/>
        </div>
        );    
};

