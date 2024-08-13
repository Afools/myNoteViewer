import React from "react";
import DCard from "./utils/DCard";
import { Container,Row,Col,Card, CardBody,Button } from "react-bootstrap";

export default function Projects(props) {
    return (
        <section >
            <Container className="main-container">
                <Row>
                    <Col md={{span:4}}>
                        <h1 className="page-title" unselectable="on">Projects</h1>
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