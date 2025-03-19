import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Row, Col, Form, FormControl, Dropdown, Stack} from "react-bootstrap";
//Общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";
//Персональные компоненты
// import Person_card from "./Card_person";
import Person_card_1 from './Card_person_v2';

import { getPosts } from './Admin_users_data';


//Стили
import "./Admin_page_style.css"
import axios from 'axios';



export default function Admin_page_4() {
    const [usersData,setUsersData]=useState(["Ничего"])
    useEffect(()=>{
        // getPosts.then((res) => console.log(res)).catch(err => console.log(err))
        setUsersData(getPosts())
    },[])
    

    const ListItems=usersData.map((item)=><p>{item}</p>)

    return (
        <div>
            <Main_Header/>
            <div className="block_page_1">
            <p>Пока тут ничего нет</p>
            {ListItems}
            </div>
            <UnderBar/>
        </div>
        );    
};

