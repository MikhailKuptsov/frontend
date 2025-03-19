import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import image2 from '../Images/blue.png';

//стили
import "./Admin_page_style.css"



export default function Person_card_1({info}){
        return (
          <div>
            <Card className="cards_style">
              {/* <Card.Img variant="top" src={image2} /> */}
              <Card.Body>
                <Card.Title>
                  <h5>{info.firstName}</h5>
                  <h5>{info.name} </h5>
                  <h5>{info.fatherName}</h5></Card.Title>
                
                <Button variant="outline-dark" href="/Person_information_page">Редактировать профиль</Button>
              </Card.Body>
            </Card>
            </div>
          );
    }
  
