import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

export default function Home(props){
    return (
        <Container fluid className="main-container" id="home">
            <Row>
                <Col md={6} className="home-header">
                    <h1 style={{paddingBottom:15}} className="heading">
                        Welcom to the AFOOL's blog.
                        <span className="wave" role="img" aria-labelledby="wave">
                            👋🏻
                        </span>
                    </h1>
                </Col>
            </Row>
            <Row className="home-text">
                <Col style={{fontSize:20}}>
                I share some interesting things in this site. Beside, I use this site to learn and test some front-end tech.</Col>

            </Row>
        </Container>
    )
}