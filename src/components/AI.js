import React from "react";
import { Container,Row,Col,Card, CardBody,Button } from "react-bootstrap";

export default function AI(props) {
    return (
        <section className="ai-main-page">
            <Container>
                <Row>
                    <Col md={{span:4}}>
                        <h1>AI</h1>
                        <p>这里分享一些AI相关项目</p>
                    </Col>
                </Row>
                <Row className="ai-content" style={{borderTop:'1px solid black',paddingTop:'30px'}}>
                    <Col><a href="https://github.com/Afools/Embolus-detection" style={{textDecoration:'none'}}>
                    <Card style={{width:'18rem'}}>
                        <Card.Img variant="top" src="./cancer_detection.png" />
                        <CardBody style={{borderTop:'1px solid #c5c5c5'}}>
                            <Card.Title>癌栓检测</Card.Title>
                            <Card.Text>
                                该项目使用retinaNet对病理切片进行检测，mAP@0.5达到80.3%
                            </Card.Text>
                        </CardBody>
                    </Card></a>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}