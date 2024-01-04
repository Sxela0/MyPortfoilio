import React from 'react';
import './Project.css';
import Card from './Card/Card';

const Project = () => {
  return (
    <div className="project-container">
      <div className="inner-project-container">
        <div className="project-heading">PROJECTS</div>
        <Card nunber="01" image="/static/card.png" />
        <Card nunber="02" image="/static/card1.png" order={1} />
        <Card nunber="03" image="/static/card2.png" />
      </div>
    </div>
  );
};

export default Project;
