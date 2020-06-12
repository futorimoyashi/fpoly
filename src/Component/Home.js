import React, { useState, useEffect } from 'react' 
import {
    Card, CardBody,
    CardTitle, Col, Row, CardText, Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input
  } from 'reactstrap';
import {
    Link
} from "react-router-dom";

import axios from 'axios'

export default function Home() {
    const [list, setList] = useState('') 
    const [name, setName] = useState('')
    const url ='https://quiz-online-fpt.herokuapp.com/semesters'

    useEffect(() => {
        axios.get(url).then(res => setList(res.data))
    }, [name])

    const check = (name) => {
        axios.post(url, {
            name: name
        }).then(res => setName(''))
    }

    return (
        <div>
            <Breadcrumb>
                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>List Semester</BreadcrumbItem>
            </Breadcrumb>
            <h2 className="text-center">Create New Semester</h2>
            <Col md={{size: 8, offset: 2}}>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail" className="float-left">Semester Code</Label>
                        <Input type="text" name="name" id="exampleEmail" placeholder="semester code" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} />
                    </FormGroup>
                    <Button onClick={(e) => {
                        check(name)
                        e.preventDefault()
                    }}>Submit</Button>
                </Form>
            </Col>
            <hr />
            <h2 className="text-center">List Semesters</h2>
            <Col>
                {list && list.map(e => 
                        <Card md={{size: 2, offset: 1}}> 
                            <CardBody>
                                <CardTitle className="text-center">Semester</CardTitle>
                                <CardText>{e.name}</CardText>
                                <Link to={'/room/' + e.id}>Rooms</Link>
                            </CardBody>
                        </Card>
                )}
            </Col>
        </div>
    )
}