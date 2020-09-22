import React from 'react'

function Project(props) {
  const {name} = props.data;
  return(
    <div>
    <li>{name}</li>

    </div>
  )
}
export default Project