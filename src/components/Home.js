import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function Home(props){
    return (
        <section>
            <Container fluid className="home-section" id="home">
            <strong>It is a home page</strong>
            </Container>
        </section>
    )
}