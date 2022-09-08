import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { useEffect } from "react";
import projects from "../../projects";
import { useParams } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';


function Project() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    largeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 2000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 770 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 770, min: 0 },
      items: 1
    }
  };

  const { id } = useParams();
  const project = projects.find(obj => {
    return obj.id == id;
  })

  useEffect(() => {

    window.scrollTo({top: 0, behavior: 'smooth'});

  }, [])

  return (
    <div className="project" >
      <h1 className="project-title">{project.title}</h1>
      <h4 className="project-subtitle">{project.date}</h4>
      <div className="project-carousel">
        <Carousel responsive={responsive} infinite={true}>
          {project.images.map((image) => (
            <img
              className="project-image"
              src={image}
              alt="Project"
            />

          ))}
          {project.videos.map((video) => (
            <video loop controls
              className="project-video">
              <source
                src={video}
                type="video/mp4"
              />
            </video>
          ))}

        </Carousel>

      </div>
      {project.description.map((item) => (
        <p className="project-description">{item}</p>
      ))}

      <div className="external-link">
        <h4>External Links:</h4>
        {project.links.map((link) => (
          <a href={link}>{link}<br /></a>
        ))}


      </div>

      <Row className="project-tags">
        {project.tags.map((tag) => (
          <Col key={tag}>
            <Badge pill bg="secondary">{tag}</Badge>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Project;
