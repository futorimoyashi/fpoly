import React, { useEffect, useState } from 'react'
// import queryString from 'query-string'
import axios from 'axios'

import { Table, Row, Col } from 'reactstrap';
import {
    Link
} from "react-router-dom";

export default function Student(props) {
    const [list, setList] = useState('') 
    const id = props.match.params.id

    useEffect(() => {
        const url ='https://quiz-online-fpt.herokuapp.com/marks/' + id + '/getRoomId'
        axios.get(url).then(res => setList(res.data)).catch(error => console.log(error.message))
    }, [])

    return (
        <Row>
            <Col>
                <Table>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>&npsp;</th>
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
        </Row>
    )
}