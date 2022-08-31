import React from "react";

function Skill(skill) {
  
  return (
    <div className="skill">
      <h1>{skill.title}</h1>
      <p>{skill.content}</p>
      
    </div>
  );
}

export default Skill;
