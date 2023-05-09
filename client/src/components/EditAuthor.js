import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
    Container,
    Form,
    Button,
    Row,
    Col,
    Card,
    Alert
} from 'react-bootstrap';

const EditAuthor = (props) => {
    const { id } = useParams();
    const [authorName, setAuthorName] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('http://localhost:8000/author/' + id)
            .then((response) => {
                setAuthorName(response.data.name);
            })
            .catch((err) => {
                console.log('Error object:', err);
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        axios
            .put('http://localhost:8000/author/' + id, { name: authorName })
            .then((response) => {
                navigate('/');
            })
            .catch((err) => {
                console.log(err.response);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <Card className="p-4">
                        <Card.Title className="text-center">Edit Author</Card.Title>
                        <Link to={'/'}>Home</Link>
                        <Form onSubmit={submitHandler}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={authorName}
                                    onChange={(e) => setAuthorName(e.target.value)}
                                    isInvalid={!!errors.name}
                                />
                                {errors.name && (
                                    <Alert variant="danger" className="mt-2">{errors.name.message}</Alert>
                                )}
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Button type="submit" variant="primary" className="w-100">
                                        Update
                                    </Button>
                                </Col>
                                <Col>
                                    <Button as={Link} to="/" variant="secondary" className="w-100">
                                        Cancel
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default EditAuthor;
