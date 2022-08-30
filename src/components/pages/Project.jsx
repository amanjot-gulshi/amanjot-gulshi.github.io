import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';


function Project() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
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

  const { project } = this.props.location;

  console.log(project);

  const [tags, setTags] = useState([]);

  useEffect(() => {

    if (project != null) {
      setTags(project.tags);
    }

  }, [])

  return (
    <div className="project" >
      <h1 className="project-title">{project.title}</h1>
      <h4 className="project-subtitle">{project.date}</h4>
      <div className="project-images">
        <Carousel responsive={responsive}>
          {project.images.map((image)=>(
            <img
            className="project-image"
            src={require("../../images" + image)}
            alt="Project"
          />
          ))}
        </Carousel>

      </div>
      <p className="project-description">{project.description}</p>
      <ListGroup horizontal className="project-tags">
        {tags.map((tag) => (
          <ListGroup.Item>{tag}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Project;
