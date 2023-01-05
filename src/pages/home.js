import React, { useEffect, useState } from "react";
import { Container, Card, Button, Col, Row } from "react-bootstrap";
import { QuestionCircle } from "react-bootstrap-icons";
import axios from "axios";


export const Home = () => {
    const [question, setQuestion] = useState([]);
    useEffect(
        () => {
            axios.get('http://localhost:443/sumquestion')
                .then(
                    function (response) {
                        setQuestion(response.data);
                        // console.log(question);
                    })
                .catch(
                    function (error) {
                        console.log(error);
                    })
        }, [])
    return (
        <Container>
            <Card style={{ width: '18rem' }} className="shadow card-bg-color border border-white">
                <Card.Body>
                    {/* <Card.Title>Quesions</Card.Title> */}
                    <Card.Text className="mt-3 d-flex justify-content-around">
                        <Row>
                            <Col sm={12} md={6} lg={6} >
                                {question.map((val, keys) => {
                                    return (
                                        <p key={keys} className="fs-1 fw-bold">{val.sum}</p>)
                                })}
                                {/* <p>{question.con_id}</p>/ */}

                            </Col>
                            <Col sm={12} md={6} lg={6} >
                                <QuestionCircle className="text-warning text-end fs-1" />
                            </Col>
                            <Col>
                                <p className="fs-5 text-muted">conversations</p>
                            </Col>
                        </Row>
                        <Row>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>

            <table id="anatomy-simple-chart" class="charts-css column show-labels">
                <caption> Column Example #6 </caption>
                <thead>
                    <tr>
                        <th scope="col"> Year </th>
                        <th scope="col"> Progress </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"> 2016 </th>
                        <td style={{ "--size": 0.4 }} ></td>
                    </tr>
                    <tr>
                        <th scope="row"> 2017 </th>
                        <td style={{ "--size": 0.4 }}></td>
                    </tr>
                    <tr>
                        <th scope="row"> 2018 </th>
                        <td style={{ "--size": 0.4 }}></td>
                    </tr>
                    <tr>
                        <th scope="row"> 2019 </th>
                        <td style={{ "--size": 0.4 }}></td>
                    </tr>
                    <tr>
                        <th scope="row"> 2020 </th>
                        <td style={{ "--size": 0.4 }}></td>
                    </tr>

                </tbody>
            </table>
        </Container >
    )
}
