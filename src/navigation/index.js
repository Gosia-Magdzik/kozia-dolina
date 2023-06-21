import { Container, Nav, Navbar } from "react-bootstrap";
import { StyledNavBar, Img, StyledNavToggle, StyledNavLink } from "./styled";
import logo from "../images/logo.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';



export const Navigation = () => {
    return (
        <StyledNavBar 
            collapseOnSelect
            as={Navbar}
        >
            <Container>
                    <Img src={logo}/>
                <StyledNavToggle
                    as={Navbar.Toggle}
                />
                <Navbar.Collapse
                    className="justify-content-end"
                >
                <Nav className="ml-auto">
                    <Nav.Link
                        as={StyledNavLink}
                        eventKey="1"
                        to="/"
                    >
                        🏡
                    </Nav.Link>
                    <Nav.Link
                        as={StyledNavLink}
                        eventKey="2"
                        to="about"
                    >
                        O nas
                    </Nav.Link>
                    <Nav.Link
                        as={StyledNavLink}
                        eventKey="3"
                        to="/gallery"
                    >
                        Galeria
                    </Nav.Link>
                    <Nav.Link
                        as={StyledNavLink}
                        eventKey="4"
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