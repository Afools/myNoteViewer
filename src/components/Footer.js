import { Container,Row,Col } from "react-bootstrap";

export default function Footer(){
    return(
        <Container fluid className="footer">
            <Row>
                <Col md={{span:1, offset:4}} >
                <a className="github-icon" target="_blank" href="https://github.com/Afools" rel="noreferrer"><span className="visually-hidden">My github</span></a></Col>
                <Col md='auto'>mail: mail_lijing@foxmail.com</Col>
            </Row>
        </Container>
    )
}