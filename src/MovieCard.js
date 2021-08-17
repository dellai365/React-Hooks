import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './App.css';
const MovieCard = (props) => {

    return (
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={props.photo} style={{ width: '100%', height: "20em" }} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{props.rating}</ListGroupItem>

            </ListGroup>

        </Card>



    )


}

export default MovieCard;
