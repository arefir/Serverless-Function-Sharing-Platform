import React from 'react';
import ToggleSwitch from './ToggleSwitch.js';
import ProjectCard from './ProjectCard.js';
import './ContentArea.css';

function ContentArea() {
  const projects = [
    { status: "Ready for Dev", title: "AWS Node.js Example", link:"test test      k", date: "2024.10.XX", authorFile: "Abu Ali" },
    { status: "Ready for Dev", title: "AWS Node.js Example", date: "2024.10.XX", authorFile: "Abu Ali" },
    { status: "Ready for Dev", title: "Example.js", date: "2024.10.XX", authorFile: "Abu Ali" },
    { status: "Ready for Dev", title: "AWS Node.js Example", date: "2024.10.XX", authorFile: "Abu Ali" },
    { status: "Ready for Dev", title: "Example.js", date: "2024.10.XX", authorFile: "Abu Ali" },
    { status: "Ready for Dev", title: "AWS Node.js Example", date: "2024.10.XX", authorFile: "Abu Ali" }
  ];

  return (
    <section className="content-area">
      <ToggleSwitch />
      <h1 className="section-title">Top Functions</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default ContentArea;
