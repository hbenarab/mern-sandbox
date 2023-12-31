import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import axios from "axios";


export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);

    const handleSubmit = (e) => {
        const configuration = {
            method: "post",
            url: "http://localhost:3000/register",
            data: {
                email,
                password
            }
        };
        axios(configuration)
            .then(result => {
                setRegister(true);
            })
            .catch(error => new Error())
    }


    return (
        <>
            <h2>Register</h2>
            <Form>
                {/* email */}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>

                {/* password */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"/>
                </Form.Group>

                {/* submit button */}
                <Button variant="primary" type="submit" onClick={e => handleSubmit(e)}>
                    Register
                </Button>
                {register ? (
                    <p className="text-success">Your are registered successfully !</p>
                ) : (
                    <p className="text-danger">You are not registered</p>
                )}
            </Form>
        </>
    )
}
