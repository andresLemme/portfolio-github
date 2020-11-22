import React, { useContext } from 'react'
import "./Projects.scss"
import ThemeContext from '../../context/ThemeContext'

import Project from '../project/Project'

function Projects() {

  const {repos} = useContext(ThemeContext)
  return(
    <div className="projests_box">
    <ul className="list_projects">
    {repos.map((project, key)=>{
      return(
        <Project data={project} key={key}/>
      )
    })}
     
    </ul>
    </div>
    
  )
}
export default Projects