import React, { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects - Thamizh's portfolio";
  }, []);

  return (
    <div>
      <h1>Projects Page</h1>
    </div>
  );
};

export default Projects;
