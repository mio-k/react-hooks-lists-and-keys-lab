import React from "react";

function ProjectItem({ name, about, technologies }) {
  let techArray = technologies.map((technology, i) =>(
    <span key={`${technology}${i}`}>
    {technology}
    </span>
  ))
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techArray}
      </div>
    </div>
  );
}

export default ProjectItem;
