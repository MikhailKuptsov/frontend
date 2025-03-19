import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Row, Col, Form, FormControl, Dropdown, Stack} from "react-bootstrap";
import Cookies from 'js-cookie';
//Общие компоненты
import Main_Header from "../Components/Main_Header";
import UnderBar from "../Components/UnderBar";
//Персональные компоненты
// import Person_card from "./Card_person";
import Person_card_1 from './Card_person_v2';

// data files
// import people from "./people_list_data";

//Стили
import "./Admin_page_style.css"
import axios from 'axios';

// Пример данных (замените на ваши реальные данные)
// const initialData = [
//     { id: 1, lastName: 'Иванов', firstName: 'Иван', middleName: 'Иванович' },
//     { id: 2, lastName: 'Петров', firstName: 'Петр', middleName: 'Петрович' },
//     { id: 3, lastName: 'Сидоров', firstName: 'Сидор', middleName: 'Сидорович' },
//     { id: 4, lastName: 'Иванова', firstName: 'Анна', middleName: 'Ивановна' },
//     { id: 5, lastName: 'Смирнов', firstName: 'Сергей', middleName: 'Иванович' },
//     { id: 6, lastName: 'Кузнецов', firstName: 'Алексей', middleName: 'Петрович' },
//     { id: 7, lastName: 'Андреев', firstName: 'Алексей', middleName: 'Петрович' },
//     { id: 8, lastName: 'Кононенко', firstName: 'Алексей', middleName: 'Петрович' }, // Добавлен пример
//   ];


export default function Admin_page_3() {
    //данные о самом пользователе сайта
    let username_1 = Cookies.get('username_data');
    //перевод данных в json формат
    const user_attributes=JSON.parse(username_1);
    // console.log(user_attributes);
    let flag=user_attributes.role
    const api_key=user_attributes.api_session_key;
    // console.log(flag);
    
    //Получение данных о всех пользователях
    // console.log("Данные из API")
     //Хук в котором будут храниться данные о всех пользователях
     const [usersData, setUsersData]=useState([]);

    useEffect(()=>{
        axios.get("https://9l1rs9ln-8000.euw.devtunnels.ms/users/",
            {headers:{'api-session-key':api_key}})
            // .then((response) => console.log(response.data))
            .then((response)=>setUsersData(response.data))
            .catch((error) => console.error(error))
    })

    const [searchTerm, setSearchTerm] = useState('');

    //ХУК в котором будет сохраняться значения которые будут найдены по поиску
    const [data, setData] = useState(usersData);

     //функция в которая проводит динамический поиск
     const handleSearch = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
    
        if (!term) {
          setData(usersData); // Если поле поиска пустое, показываем все карточки
          return;
        }
    
        //Переменная в которой будут сохранены введенные значения в поле
        const filteredData = usersData.filter((item) => {
          const username = item.username.toLowerCase(); //фамилия
          const surname = item.surname.toLowerCase(); //имя
          const name = item.name.toLowerCase(); //отчество
          const fullName = `${username} ${surname} ${name}`.toLowerCase(); // Полное ФИО
    
          return fullName.includes(term); // Ищем совпадение, которое включает введенное значение
        });
    
        setData(filteredData);
      };
    


    // генерация карточек
    // const listItems = usersData.map( (item) =>
    //        <p>{item.username}
    //        {item.email}
    //        {item.name}
    //        {item.surname}
    //        {item.patronymic}
    //        {item.role}
    //        {item.job_title}</p>
    //     );
    return (
        <div>
            <Main_Header/>
            <div className="block_page_1">
                {/* {listItems} */}
                {/* Поисковая строка по пользователям */}
                <div>
                    <Form className="search_line">  
                        <FormControl 
                        type="text" 
                        placeholder="Введите пользователя" 
                        style={{margin:"10px"}} value={searchTerm}
                        onChange={handleSearch} />
                    </Form>
                    {/* <form>
                        <input/>
                        <Button variant="outline-info" type="submit">Поиск</Button>
                    </form> */}
                </div>

                <div className="button_style">
                <Button variant="outline-dark" href="/Person_information_page" size="lg">
                        Создать пользователя
                    </Button>
                </div>
                <div className="cards_place">
                {/* {listItems} */}
                {data.map((item) => (
                    <div key={item.id}>
                        <Person_card_1 info={{firstName:item.username,name:item.surname, fatherName:item.name}}/>
                        {/* <h3>{item.lastName} {item.firstName} {item.middleName}</h3> */}
                    </div>
                ))}
                </div>

            </div>
            <UnderBar/>
        </div>
        );    
};

