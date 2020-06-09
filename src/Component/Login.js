import React, { useState, useContext } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { AuthContext } from '../Context/AuthContext'

const Login = (props) => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const { check } = useContext(AuthContext)
    return (
        <Col md={{ size: 8, offset: 2 }}>
            <Form>
            <FormGroup>
                <Label for="exampleEmail" className="float-left">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="user" 
                    value={user} 
                    onChange={(e) => setUser(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword" className="float-left">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
            </FormGroup>
            <Button onClick={(e) => {
                check(user, password)
                e.preventDefault()
            }}>Submit</Button>
            </Form>
        </Col>
    );
}

export default Login;