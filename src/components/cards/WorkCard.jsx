import React from 'react';

function WorkCard(work){

    return (
        <div className="work">
            
            <h3 className="work-title">{work.title}</h3>
            <h4 className="work-company">{work.company}</h4>
            <h5 className="work-date">{work.date}</h5>
            {work.description.map((item)=>(
                <p className="work-description">{item}</p>
            ))}

        </div>
    )
}

export default WorkCard;