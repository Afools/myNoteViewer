import React from "react";
import DCard from "./utils/DCard";
import { useEffect,useState } from "react";
import { Container,Row,Col} from "react-bootstrap";

export default function Projects(props) {
    const [data, setData] = useState([]);
    useEffect(()=>{
        const data = fetch('https://raw.githubusercontent.com/Afools/pictureRepo/main/projects.json')
        .then(response=>response.json())
        .then(data=>setData(data))
    })

    return (
        <section >
            <Container className="main-container">
                <Row>
                    <Col md={{span:4}}>
                        <h1 className="page-title" unselectable="on">Projects</h1>
                    </Col>
                </Row>
                <Row className="ai-content" style={{borderTop:'1px solid black',paddingTop:'30px'}}>
                    {data.map((item,index)=>(
                        <Col>
                            <DCard 
                            href={item.href}
                            imgSrc={item.imgSrc}
                            cardTitle={item.cardTitle}
                            cardText={item.cardText}
                            />
                        </Col>
                    ))}
                    {/* <Col>
                    <DCard 
                    href="https://github.com/Afools/Embolus-detection"
                    imgSrc='https://raw.githubusercontent.com/Afools/pictureRepo/main/cancer_detection.png'
                    cardTitle='癌栓检测'
                    cardText='该项目使用retinaNet对病理切片进行检测，mAP@0.5达到80.3%'
                    />
                    </Col> */}
                </Row>
            </Container>

        </section>
    )
}