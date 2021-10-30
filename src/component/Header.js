import { Component } from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometer, faFileAlt, faShoppingCart, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import styles from "./Header.module.css";




export default class Header extends Component {
    render() {
        return (
            <>
                <header className="shadow-5">
                    <Navbar bg="#4e657a" expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">PRODUCT ADMIN</Navbar.Brand>
                            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                 
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td> <Nav.Link href="#home"><FontAwesomeIcon icon={faTachometer} /></Nav.Link></td>
                                                    <td> <Nav.Link href="#home"><FontAwesomeIcon icon={faFileAlt} /></Nav.Link></td>
                                                    <td> <Nav.Link href="#home"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link></td>
                                                    <td> <Nav.Link href="#home"><FontAwesomeIcon icon={faUser} /></Nav.Link></td>
                                                    <td> <Nav.Link href="#home"><FontAwesomeIcon icon={faCog} /></Nav.Link></td>
                                                </tr>
                                                <tr>
                                                    <td>Dashboard</td>
                                                    <td>Reports</td>
                                                    <td>Product</td>
                                                    <td>Accounts</td>
                                                    <td>Settings</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    
                                    


                                    <Nav.Link href="#home" className={styles.logout}>Admin,<b>Logout</b></Nav.Link>



                                    {/* <Nav.Link href="#link">Link</Nav.Link>
                                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown> */}
                                </Nav>
                                
                            </Navbar.Collapse>
                            
                        
                        </Container>
                    </Navbar>
                </header>
            </>
        )
    }
}