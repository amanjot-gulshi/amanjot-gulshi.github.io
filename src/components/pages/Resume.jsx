import { Col, Container, Row } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';


function Resume() {
    return (
        <div className="resume">
            <h1 className="resume-title">Resume</h1>
            <h2>Skills</h2>
            <Container className="skills-container resume-section">
                <Row>
                    <Col>
                        <div className="software-skills">
                            <h4>Software</h4>
                            <ListGroup>
                                <ListGroup.Item> Python </ListGroup.Item>
                                <ListGroup.Item> Java </ListGroup.Item>
                                <ListGroup.Item> Web Development </ListGroup.Item>
                                <ListGroup.Item> C++ </ListGroup.Item>
                                <ListGroup.Item> Robotic Operating System </ListGroup.Item>
                                <ListGroup.Item> Github </ListGroup.Item>
                            </ListGroup>

                        </div>
                    </Col>
                    <Col>
                        <div className="hardware-skills">
                            <h4>Hardware</h4>
                            <ListGroup>
                                <ListGroup.Item> Computer Aided Design </ListGroup.Item>
                                <ListGroup.Item> Rapid Prototyping </ListGroup.Item>
                                <ListGroup.Item> Microcontrollers </ListGroup.Item>
                                <ListGroup.Item> PID Motor Control </ListGroup.Item>
                            </ListGroup>

                        </div>
                    </Col>
                </Row>

            </Container>

            <div className="work-experience resume-section">
                <h2>Work</h2>
                <ListGroup>
                    <ListGroup.Item> Capstone Research and Development </ListGroup.Item>
                    <ListGroup.Item> Korechi Innovations Inc </ListGroup.Item>
                    <ListGroup.Item> NSERC Undergraduate Research </ListGroup.Item>
                </ListGroup>
            </div>
            <div className="education resume-section">
                <h2>Education</h2>
                <h4>University of Ontario Institute of Technology</h4>
                <h5>Bachelors of Engineering in Mechatronics</h5>
                <h6>2016 - 2022</h6>
            </div>

        </div>
    )
}

export default Resume;