import React, { useEffect, useState } from 'react'
// import queryString from 'query-string'
import axios from 'axios'

import { Table } from 'reactstrap';

export default function Room(props) {
    const [list, setList] = useState('') 
    const id = props.match.params.id

    useEffect(() => {
        const url ='https://quiz-online-fpt.herokuapp.com/rooms/' + id
        axios.get(url).then(res => setList(res.data)).catch(error => console.log(error.message))
    }, [])

    return (
        <Table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {list && list.map(e => 
                    <tr>
                        <th scope="row">{e.id}</th>
                        <td>{e.name}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    )
}