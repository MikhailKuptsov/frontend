import React, {useState} from "react";
import { Card, Button,Col,Row, Form, Stack} from "react-bootstrap";
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";

import "./person_information_page_css.css"


export default function Person_information_page(){
    const [state, setState] = useState({
        firstname:"",
        name:"",
        lastname:"",
        job_title:"",
        email: "",
        password: "",
        admin_rights:false,
        user_rights:true
      });

    const handleInputChange = (event) => {
        const { a, value } = event.target;
        setState((prevProps) => ({
          ...prevProps,
          [a]: value
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
      };

    

    return(
        <>
        <Main_Header/>
        <div className="block_page_2">
            <div><h1>Профиль</h1></div>
            <div className="buttons_list">
                <div className="buttons_style_1"><Button variant="success">Сохранить</Button></div>
                <div className="buttons_style_1"><Button variant="danger">Удалить</Button></div>
            </div>

            <Form className="form_block" onSubmit={handleSubmit}>
                    <Card className="cardStyle">
                    <Card.Body>
                    <Card.Title>Информация:</Card.Title>
                    <Form.Group className="mb-3" >
                        <Form.Label>Фамилия:</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder="Введите фамилию" 
                            name="firstname"
                            value={state.firstname}
                            onChange={handleInputChange}/>
                    
                        <Form.Label>Имя:</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder="Введите имя" 
                            name="name"
                            value={state.name}
                            onChange={handleInputChange}/>
                    
                        <Form.Label>Отчество:</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder="Введите отчество"
                            name="lastname"
                            value={state.lastname}
                            onChange={handleInputChange}/>
                    
                        <Form.Label>Должность:</Form.Label>
                        <Form.Control 
                            type='text' 
                            placeholder="Введите должность"
                            name="job_title"
                            value={state.job_title}
                            onChange={handleInputChange}/>
                    
                        <Form.Label>Email:</Form.Label>
                        <Form.Control 
                            type='email' 
                            placeholder="Введите email"
                            name="email"
                            value={state.email}
                            onChange={handleInputChange}/>
                    
                        <Form.Label>Пароль:</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Введите пароль" 
                            name="email"
                            value={state.email}
                            onChange={handleInputChange}/>
                    </Form.Group>
                </Card.Body>
                </Card>
            <Card className="cardStyle">
                <Card.Body>
                <Card.Title>Разрешения:</Card.Title>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                        type="checkbox" 
                        label="Админ" 
                        name="admin_rights"
                        value={state.admin_rights}
                        onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        label="Обычный пользователь"
                        name="user_rights"
                        value={state.user_rights}
                        onChange={handleInputChange}/>
                    </Form.Group>
                    <Button variant="outline-success" type="submit">Сохранить</Button>
                </Card.Body>
            </Card>
            
            
            </Form>
        </div>
        <UnderBar/>
        </>
    );
}