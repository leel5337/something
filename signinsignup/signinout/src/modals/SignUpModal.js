import React from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import HorizontalLine from "../components/HorizonLine";

const SignUpModal = ({ show, onHide }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Container>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>University</Form.Label>
                            <Form.Control type="university" placeholder="University" />
                        </Form.Group>
                        <Button block variant="info" type="button" className="my-3">
                            Sign Up
                        </Button>
                        <HorizontalLine text={""} />

                    </Form>
                </Modal.Body>
            </Container>
        </Modal>
    );
};

export default SignUpModal;