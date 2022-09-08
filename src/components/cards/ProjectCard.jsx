import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function ProjectCard(project) {

    return (
        <Col sm="12" md="6" lg="6" xl="4" xxl="3">
            <Card key={project.id}>
                <Card.Img className="projects-thumbnail" variant="top" src={ project.thumbnail} />
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Subtitle>{project.date}</Card.Subtitle>
                    <Card.Text>
                        {project.description[0].substring(0, 200)}...
                    </Card.Text>
                    <Row>
                        {project.tags.map((tag) => (
                            <Col className="project-tag" key={tag}>
                                <Badge pill bg="secondary">{tag}</Badge>
                                </Col>
                        ))}
                    </Row>
                    <Link to={{
                        pathname: `/projects/${project.id}`
                    }}>
                        <Button className="project-link" variant="light">
                            View Project</Button>
                    </Link>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProjectCard;