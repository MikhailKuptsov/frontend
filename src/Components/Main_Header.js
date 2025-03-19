
import React, { Component } from "react";
import logo from './logo1.png'
import { Navbar, Nav, NavLink, Container,  } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Cookies from 'js-cookie';


export default function Main_Header(){
    //данные о самом пользователе сайта
    let username_1 = Cookies.get('username_data');
    //перевод данных в json формат
    const user_attributes=JSON.parse(username_1);
    // console.log(user_attributes);
    let flag=user_attributes.role
    // console.log(flag);

    return(
            <>
            {/* fixed="top" - прибить navbar на верхрей части сайта постоянно*/}
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    {/* Логотип */}
                    <Navbar.Brand href="https://ao-zdrm.ru/">
                         <img 
                            src={logo}
                            height="70"
                            width="auto"
                            className="d-inline-block aline-top"
                            alt="Logo" 
                        />
                    </Navbar.Brand>
                    {/* Кнопка которая будет появляться после уменьшения экрана */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink href="/Main_page">Главная страница</NavLink>
                            {flag==="Admin"?<NavLink href="/Admin_page">Администратор</NavLink>:null}
                            {/* <NavLink href="/Admin_page">Администратор</NavLink> */}
                            <NavLink href="/">Выход</NavLink>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
        )
} 

