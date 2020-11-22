import React from "react";
import "./Project.scss";

function Project(props) {
  const { name, clone_url } = props.data;
  return (
    <div className="project_box">
      <div className="title_box">
        <li>{name}</li>
      </div>
      <div className="btn_box">
        <a className="btn" href={clone_url}>Ver Repo</a>
      </div>
    </div>
  );
}
export default Project;
