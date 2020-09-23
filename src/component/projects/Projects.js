import React, { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'

import Project from '../project/Project'

function Projects() {

  const {repos} = useContext(ThemeContext)
  return(
    <ul>
    {repos.map((project, key)=>{
      return(
        <Project data={project} key={key}/>
      )
    })}
     
    </ul>
  )
}
export default Projects