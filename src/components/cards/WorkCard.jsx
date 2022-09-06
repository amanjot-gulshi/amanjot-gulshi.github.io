import React from 'react';
import Card from 'react-bootstrap/Card'

function WorkCard(work){

    return (
        <Card className="work">
            <Card.Body>
                <Card.Title className="work-title">{work.title}</Card.Title>
                <Card.Subtitle className="work-company">{work.company}</Card.Subtitle>
                <Card.Subtitle className="work-date">{work.date}</Card.Subtitle>
                {work.description.map((item)=>(
                <Card.Text className="work-description">{item}</Card.Text>
            ))}
            </Card.Body>
            
            

        </Card>
    )
}

export default WorkCard;