import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    Container,
    Form,
    Button,
    Row,
    Col,
    Card,
    Alert
} from 'react-bootstrap';

const AuthorForm = () => {
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/author', { name })
            .then((response) => {
                console.log(response);
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
                        <Card.Title className="text-center">Add New Author</Card.Title>
                        <Link to={'/'}>Home</Link>
                        <Form onSubmit={onSubmitHandler}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    isInvalid={!!errors.name}
                                />
                                {errors.name && (
                                    <Alert variant="danger" className="mt-2">{errors.name.message}</Alert>
                                )}
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Button type="submit" variant="primary" className="w-100">
                                        Submit
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

export default AuthorForm;
