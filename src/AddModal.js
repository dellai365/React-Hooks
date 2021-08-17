import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';
import { useRef, useState } from 'react';





function AddModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const photo = useRef();
    const name = useRef();
    const rating = useRef();
    const description = useRef();


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control placeholder="movie name" ref={name} />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Control placeholder="rating" ref={rating} />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Control placeholder="description" ref={description} />
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Form.Control placeholder="picture URL" ref={photo} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        return (
                            (name.current.value && description.current.value && rating.current.value && photo.current.value && (
                                props.add([...props.old, {
                                    name: name.current.value,
                                    description: description.current.value,
                                    rating: rating.current.value,
                                    photo: photo.current.value
                                }]), handleClose())

                            )
                        

                        )}}   >

                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default AddModal;
