import React from "react";
import { Button, Accordion, Row, Col } from "react-bootstrap";

//Стили
import "./main_page_css.css"


const tests = [
    { title: 'Создать тест', pageLink: "/Creating_test_page",color:'outline-success', id: 1 },
    { title: 'Редактировать тест', pageLink: "/Edit_test_page",color:'outline-dark', id: 2 },
    { title: 'Удалить тест', pageLink: "/Delete_test_page", color:'outline-danger', id: 3 },
  ];

export default function Big_button({info}) {
    const MyStyle={maxWidth: '1000px', minWidth: '10px', marginTop:'50px',marginLeft:"auto", marginRight:"auto"  
};
    const listItems = tests.map( tests =>
        <Row><Button style={{marginTop:"10px"}} href={tests.pageLink} variant={tests.color} size="lg">{tests.title}</Button></Row>
    );
    return(
        <>
        <center>
            <Accordion className="main_page_card">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                
                <Col>
                    <Row><h2 style={{marginLeft:"auto", marginRight:"auto"}}>{info.label}</h2></Row>
                    <Row><p style={{marginLeft:"auto", marginRight:"auto"}}>{info.text_info}</p></Row> 
                    </Col>
                    
              </Accordion.Header >
              <Accordion.Body >
                <Row>{listItems}</Row>
              </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            </center>
            </>

    );
}