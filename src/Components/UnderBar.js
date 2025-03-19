import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function UnderBar(){
    return(
        <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <div style={{marginTop:"10px"}}>
                        <p style={{color:"white"}}>Контактная информация:</p><br/>
                        <p style={{color:"white"}}>Техническая поддержка:</p>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}