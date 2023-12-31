import { Container, Nav, Navbar } from "react-bootstrap";
import { StyledNavBar, Img, StyledNavToggle, StyledNavLink, Barn } from "./styled";
import logo from "../images/logo-removebg.png"
import 'bootstrap/dist/css/bootstrap.min.css';

export const Navigation = () => {
    return (
        <StyledNavBar 
            collapseOnSelect
            as={Navbar}
        >     
            <Container>
                <Img src={logo} class="img-fluid"/>
                <StyledNavToggle
                    as={Navbar.Toggle}
                />
                <Navbar.Collapse
                    className="justify-content-end"
                >
                <Nav className="mr-auto align-items-center" >
                    <Nav.Link
                        as={StyledNavLink}
                        eventKey="1"
                        to="/"
                    >
                    < Barn />
                    </Nav.Link>
                    <Nav.Link
                        as={StyledNavLink}
                        eventKey="2"
                        to="/gallery"
                    >
                        Galeria
                    </Nav.Link>
                    <Nav.Link
                        as={StyledNavLink}
                        eventKey="3"
                        to="contact"
                    >
                        Kontakt
                    </Nav.Link>

                </Nav>
                </Navbar.Collapse>
            </Container>
        </StyledNavBar>
    );
}