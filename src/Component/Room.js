import React, { useEffect, useState } from 'react'
// import queryString from 'query-string'
import axios from 'axios'

import { Table, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {
    Link
} from "react-router-dom";

export default function Room(props) {
    const [list, setList] = useState('') 
    const [name, setName] = useState('')
    const id = props.match.params.id
    const url ='https://quiz-online-fpt.herokuapp.com/rooms/'


    useEffect(() => {
        axios.get(url + id).then(res => setList(res.data)).catch(error => console.log(error.message))
    }, [name])

    const check = (name) => {
        axios.post(url, {
            name: name
        }).then(res => setName(''))
    }

    return (
        <div>
            <Col md={{size: 8, offset: 2}}>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail" className="float-left">Class Code Name</Label>
                        <Input type="text" name="name" id="exampleEmail" placeholder="class code name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} />
                    </FormGroup>
                    <Button onClick={(e) => {
                        check(name)
                        e.preventDefault()
                    }}>Submit</Button>
                </Form>
            </Col>
            <hr/>
            <h2 className="text-center">List Class</h2>
            <Col md={{size: 10, offset: 1}}>
                <Table>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th size={4}>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list && list.map(e => 
                            <tr>
                                <th scope="row">{e.id}</th>
                                <td>{e.name}</td>
                                <td><Link to={'/mark/'+e.id}>List Students</Link></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Col>
        </div>
    )
}