import React, { useEffect, useState } from 'react';
import projectList from "../../projects";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProjectCard from '../cards/ProjectCard';

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

            <Container className="projects-container">
                <Row className="projects-row">
                    {projects.map((project) => (
                        <ProjectCard 
                        id={project.id}
                        title={project.title}
                        date={project.date}
                        thumbnail={project.thumbnail}
                        images={project.images}
                        description={project.description}
                        link={project.link}
                        tags={project.tags}
                        />
                    ))}
                </Row>
            </Container>
            <hr />
        </div>

    )

}

export default Projects;