import React from "react";
import "./Project.scss";

function Project(props) {
  const { name } = props.data;
  return (
    <div className="project_box">
      <div className="title_box">
        <li>{name}</li>
      </div>
      <div>
        <a href={props.data.clone_url}>Ver Repo</a>
      </div>
    </div>
  );
}
export default Project;
