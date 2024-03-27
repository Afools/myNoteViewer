import React from "react";
import DCard from "./utils/DCard";
import { Container,Row,Col,Card, CardBody,Button } from "react-bootstrap";

export default function AI(props) {
    return (
        <section className="ai-main-page">
            <Container>
                <Row>
                    <Col md={{span:4}}>
                        <h1 className="page-title">AI</h1>
                        <p>这里分享一些AI相关项目</p>
                    </Col>
                </Row>
                <Row className="ai-content" style={{borderTop:'1px solid black',paddingTop:'30px'}}>
                    <Col>
                    <DCard 
                    href="https://github.com/Afools/Embolus-detection"
                    imgSrc='https://raw.githubusercontent.com/Afools/pictureRepo/main/cancer_detection.png'
                    cardTitle='癌栓检测'
                    cardText='该项目使用retinaNet对病理切片进行检测，mAP@0.5达到80.3%'
                    />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}