import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projectList from "../projects";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

function Projects() {

    const [projects, SetProjects] = useState([]);

    useEffect(() => {
        if (projectList != null) {
            SetProjects(projectList);
        }
    }, [])

    return (
        <div id="projects" className="projects">
            <h1 className="projects-h1">Check out my projects!</h1>

            <Container>
                <Row>
                    {projects.map((project) => (
                        <Col >
                            <Card key={project.id}>
                                <Card.Img className="project-image" variant="top" src={require("../images/" + project.main_image)} />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Subtitle>{project.date}</Card.Subtitle>
                                    <Card.Text>
                                        {project.description.substring(0, 200)}...
                                    </Card.Text>
                                    <ListGroup horizontal className="project-tags">
                                        {project.tags.map((tag) => (
                                            <ListGroup.Item className="project-tag" key={tag}>{tag}</ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                    <Link to={{
                                        pathname: `/projects/${project.id}`
                                    }}>
                                        <Button className="project-link" variant="secondary">
                                            View Project</Button>
                                    </Link>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <hr />
        </div>

    )

}

export default Projects;