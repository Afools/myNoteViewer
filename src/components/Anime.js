import React from "react";
import { Container,Row,Col,Card, CardBody,Button } from "react-bootstrap";
import DCard from "./utils/DCard";

export default function Anime(props){
    return (
        <section className="anime-main-page">
            <Container>
                <Row>
                    <Col md={{span:4}}>
                        <h1 className="page-title">Anime</h1>
                        <p>分享一些有趣的动漫</p>
                    </Col>
                </Row>
                <Row className="anime-content" style={{borderTop:'1px solid #c5c5c5', paddingTop:'30px'}}>
                    <Col>
                        <DCard
                        imgSrc="../frieren.png" 
                        cardTitle="葬送的芙莉莲"
                        cardText="开播时间 2023年9月29日"
                        href="https://mikanani.me/Home/Bangumi/3141"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}