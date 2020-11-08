import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar} from "react-bootstrap";

export default function CustomNavbar(props) {
    const items = props.navItems.map((item) => 
       <Nav.Link>{item}</Nav.Link>
    );
    return (<Navbar bg="light" expand="lg">
        <Navbar.Brand href="#index">Remember The Ralamo</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                {items}
            </Nav>
        </Navbar.Collapse>
    </Navbar>);
}