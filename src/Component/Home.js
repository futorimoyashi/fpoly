import React, { useState, useEffect } from 'react' 
import {
    Card, CardBody,
    CardTitle, Col, Row
  } from 'reactstrap';
import axios from 'axios'

export default function Home() {
    const [list, setList] = useState('') 

    useEffect(() => {
        const url ='https://quiz-online-fpt.herokuapp.com/semesters'
        axios.get(url).then(res => setList(res.data))
    }, [])

    return (
        <Row>
            {list && list.map(e => 
                <Col md={{size: 3, offset: 1}}>
                    <Card>
                        <CardBody>
                            <CardTitle>{e.name}</CardTitle>
                        </CardBody>
                    </Card>
                </Col>
            )}
        </Row>
    )
}