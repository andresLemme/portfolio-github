import React, { useContext } from 'react'
import "./Avatar.scss"
import ThemeContext from '../../context/ThemeContext'

function Avatar() {
  const {info} = useContext(ThemeContext);
  return(
    <div className="avatar">
      <img className="img_avatar" src={info.avatar_url} alt="perfil Andres" />
    </div>
  )
}

export default Avatar