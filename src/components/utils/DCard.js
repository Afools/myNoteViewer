import {Card, CardBody} from "react-bootstrap"

export default function(props){
    return (
        <Card className="item-card" >
            <a href={props.href} style={{textDecoration:'none'}} target="_blank">
                <Card.Img className="card-img" variant="top"  src={props.imgSrc}/>
            </a>
            <CardBody style={{borderTop:'1px solid #c5c5c5'}}>
                <Card.Title>{props.cardTitle}</Card.Title>
                <Card.Text>
                    {props.cardText}
                </Card.Text>
            </CardBody>
        </Card>
    )
}