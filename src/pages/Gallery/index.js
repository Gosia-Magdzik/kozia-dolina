import small from "./img/01.jpg"
import winter from "./img/02.jpg"
import spring from "./img/03.jpg"
import born from "./img/04.jpg"
import shop from "./img/05.jpg"
import fly from "./img/06.jpg"
import sunrise from "./img/07.jpg"
import fly2 from "./img/08.jpg"
import oscypek from "./img/09.jpg"
import smoked from "./img/10.jpg"
import sunset from "./img/11.jpg"
import orfeusz from "./img/12.jpg";
import lady from "./img/13.jpg";
import { Img, Wrapper } from "./styled";
import { Row, Col } from "react-bootstrap";

export const Gallery = () => {
    return (
        <>
        <Wrapper className="fluid">
            <Row className="fluid-row" >
                <Img src={fly2} thumbnail/>
            </Row>
            <Row className="fluid-row">
                <Col className="fluid-col">
                    <Img src={small} thumbnail className="mr-3"/> 
                    <Img src={spring} thumbnail/>
                </Col>
                <Col className="fluid-col">
                    <Img src={born} thumbnail/>
                </Col>
                <Row className="fluid-row">
                    <Col className="fluid-col">
                        <Img src={oscypek} thumbnail/>
                    </Col>
                    <Col className="fluid-col">
                        <Img src={shop} thumbnail/>
                    </Col>
                    <Col className="fluid-col">
                        <Row className="fluid-row"><Img src={winter} thumbnail/></Row>
                        <Row className="fluid-row"><Img src={orfeusz}thumbnail/></Row>
                    </Col>
                </Row>
                <Img src={fly} thumbnail/>
                <Row className="fluid-row">
                    <Col className="fluid-col"><Img src={smoked} thumbnail/></Col>
                    <Col>
                        <Row className="fluid-row">
                            <Col className="fluid-col"><Img src={sunrise} thumbnail/></Col>
                        </Row>
                        <Row className="fluid-row">
                            <Col className="fluid-col"><Img src={lady} thumbnail/></Col>
                        </Row>
                    </Col>
                </Row>
                <Img src={sunset} thumbnail/>
            </Row>
        </Wrapper>
        </>
    );
};