import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import Auth_page from '../auth_page/auth_page';
import Main_page from '../main_page/main_page';

import  Admin_page_3 from '../admin_page/admin_page_v3'
import Admin_page_4 from '../admin_page/admin_page_v4';
import Admin_page_5 from '../admin_page/admin_page_v5';
import Admin_page_6 from '../admin_page/admin_page_v6';
import Create_person_page from '../person_information_page/create_person_page'
import Person_information_page_v2 from '../person_information_page/person_information_page_v2';

import One_test_page_v3 from '../audit_test_page/One_test_page_v3'
import test_data from '../tests_data_text/management.json'

import Planning_audit_page from '../planning_audit_page/planning_audit_page';

const connections_links=[
    // Ссылка на Страницу аутентификации
    // {path_link:"/", componet_page:<Auth_page/> },
    {path_link:"/", componet_page:<Auth_page/> },
    // Ссылка на главную страницу
    {path_link:"/Main_page", componet_page:<Main_page /> },

    {path_link:"/Planning_audit_page", componet_page:<Planning_audit_page /> },
    // страница админа
    // {path_link:"/Admin_page", componet_page:<Admin_page/> },
    // {path_link:"/Admin_page", componet_page:<Admin_page_3/> },
    // {path_link:"/Admin_page", componet_page:<Admin_page_4/> },
    // {path_link:"/Admin_page", componet_page:<Admin_page_6/> },
    {path_link:"/Admin_page", componet_page:<Admin_page_5/> },

    //Создать пользователя
    {path_link:"/create_person_page", componet_page:<Create_person_page/> },
    // // страница с личными данными пользователей
    // {path_link:"/Person_information_page", componet_page:<Person_information_page_v2/> },
    {path_link:"/Person_information_page/:username_log", componet_page:<Person_information_page_v2/> },
    // // страница с тестом версия 3 - основная

    // // {path_link:"/test_page_v2/management", componet_page:<One_test_page_v3 
    // //                                                 fabric_name="УЛРЗ" 
    // //                                                 test_name="M1 Достижение ключевых показателей эффективности завода"
    // //                                                 time="12.01.2021 12:00"
    // //                                                 category={test_data.managment_data}/> },
    
    {path_link:"/test_page_v2/management/:fabric_name_2/:audit_name/:time_2",componet_page:<One_test_page_v3 category={test_data.managment_data}/>},
    // // {path_link:"/test_page_v2/management/:fabric_name_2/:audit_name/:time_2",componet_page:<One_test_page_v3 file_test={test_data_management.sub_test}/>},

    // // Страница проверки назначенных аудитов
    // {path_link:"/Checking_audits_page", componet_page:<Checking_audits_page/> },
    // // страница создания теста
    // {path_link:"/Creating_test_page", componet_page:<Creating_test_page/> },
    // // Страница редактирования теста
    // {path_link:"/Edit_test_page", componet_page:<Edit_test_page/> },
    // // Страница Удаления теста
    // {path_link:"/Delete_test_page", componet_page:<Delete_test_page/> },
  
  ]

export default function Connections_links(){
    const list_of_route=connections_links.map(a=> <Route exact path={a.path_link} element={a.componet_page} />)
    return(
        <>
        <Router>
              {/* Рабочий навбар */}
              {/* <Header /> */}
              {/* Переключение на страницы */}
              <Routes>
                {list_of_route}
              </Routes>
            </Router>
        </>
    )
}