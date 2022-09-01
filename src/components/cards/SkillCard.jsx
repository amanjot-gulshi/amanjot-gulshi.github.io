import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

function SkillCard(skill) {

  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(!isExpanded);
  }

  return (
    <div className="skill">
      <Button variant="light" onClick={expand}>
        <h1>{skill.name}</h1>
        {isExpanded && (
          <div>
            <ul>
              {skill.experience.map((item) => (
                <li className="exp-item">
                  {item}
                  
                  </li>
              ))}
            </ul>
          </div>
        )}

      </Button>

    </div>
  );
}

export default SkillCard;
