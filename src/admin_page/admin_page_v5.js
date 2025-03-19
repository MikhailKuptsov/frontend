import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Row, Col, Form, FormControl, Dropdown, Stack} from "react-bootstrap";
//Общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";
//Персональные компоненты
// import Person_card from "./Card_person";
import Person_card_2 from './Card_person_v3';

import { getUsers } from './admin_users_data_2';

//Стили
import "./Admin_page_style.css"




export default function Admin_page_5() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
          setLoading(true);
          setError(null);
          try {
            const data = await getUsers();
            if (data === "данных нет") {
              setUsers([]); // Или можно оставить как есть, если хотите отображать сообщение об отсутствии данных
              setError("Данных о пользователях нет.");
            } else {
              setUsers(data);
            }
          } catch (err) {
            setError("Ошибка при загрузке данных.");
            console.error(err); // Логируем ошибку, чтобы видеть её в консоли
          } finally {
            setLoading(false);
          }
        };
    
        fetchUsers();
      }, []); // Пустой массив зависимостей означает, что useEffect выполнится только один раз при монтировании компонента


    return (
        <div>
            <Main_Header/>
            <div className="block_page_1">
            {/* <p>Пока тут ничего нет</p> */}
            <h1>Список пользователей</h1>

            {loading ? (<p>Загрузка...</p>) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : users.length > 0 ? (
              //Если пользователи есть и соединение с бэком есть, то: 
              <div>
                <div className="button_style">
                                <Button variant="outline-dark" href="/create_person_page" size="lg">
                                        Создать пользователя
                                    </Button>
                                </div>
              <div className="cards_place">
                {users.map(user => (
                    // <li key={user.id}>
                    // <strong>ID:</strong> {user.id}, 
                    // <strong>Имя:</strong> {user.name}, 
                    // <strong>Email:</strong> {user.email}
                    // {/*  Добавьте другие поля пользователя, которые хотите отображать */}
                    // </li>
                    <Person_card_2 info={{username_1: user.username , name_1: user.name, surname_1:user.surname }

                    }/>
                ))}
                </div>
                </div>
                

            ) : (
              //если пользователей нет выводится надпись:
                <p>Нет данных о пользователях.</p>
            )}

            </div>
            <UnderBar/>
        </div>
        );    
};

