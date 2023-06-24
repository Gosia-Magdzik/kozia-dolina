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
        <Wrapper className="fluid justify-content-center align-items-center">
            <Row className=" align-items-center justify-content-center" >
                <Col xs={10}>
                    <Img src={fly2} />
                </Col>
            </Row>
            <Row className=" align-items-center justify-content-center">
                <Col xs={10} sm={10} md={6} lg={6}  >
                    <Row xs={10} sm={11} md={5} lg={5}>
                        <Img src={small}/> 
                    </Row>
                    <Row xs={10} sm={11} md={5} lg={5} >
                        <Img src={spring}/> 
                    </Row>
                </Col>
                <Col className="justify-content-center align-items-center" xs={10} sm={106} md={6} lg={6}  >
                    <Img src={born} />
                </Col>
            </Row>
            <Row className="justify-content-center align-items-center">
                    <Col className="fluid-col" xs={10} sm={10} md={6} lg={6}>
                        <Img src={oscypek} />
                    </Col>
                    <Col xs={10} sm={10} md={6} lg={6}>
                        <Img src={shop}/>
                    </Col>
            </Row>
            <Row className="justify-content-center align-items-center" >
                <Col xs={10} sm={10} md={5} lg={6}><Img src={winter} /></Col>
                <Col xs={10} sm={10} md={5} lg={6} ><Img src={orfeusz}/></Col>
            </Row>
            <Row className="justify-content-center align-items-center" >
                <Col xs={10} >
                    <Img src={fly}/>
                </Col>
            </Row>
            <Row className=" align-items-center justify-content-center">
                    <Col className="fluid-col" xs={10} sm={10} md={4} lg={4}><Img src={smoked} /></Col>
                    <Col xs={10} sm={10} md={4} lg={4}>
                        <Row className="fluid-row">
                            <Col className="fluid-col"><Img src={sunrise} /></Col>
                        </Row>
                        <Row className=" align-items-center justify-content-center">
                            <Col className=" align-items-center justify-content-center" xs={10} >
                                <Img src={lady}/>
                            </Col>
                        </Row>
                    </Col>
            </Row>
            <Row className=" align-items-center justify-content-center">
                    <Col xs={11} className="justify-content-center">
                    <Img src={sunset}/>
                    </Col>
            </Row>
        </Wrapper>
        </>
    );
};