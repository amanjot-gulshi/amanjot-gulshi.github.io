import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

function SkillCard(skill) {

  const [isOpen, setIsOpen] = useState(false);

  function expand() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={"skill " + (isOpen ? "expand" : "")}>

      <Button variant="light" onClick={expand}>
        <h1>{skill.name}</h1>
        {isOpen && (
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
