import React, { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'

function Avatar() {
  const {info} = useContext(ThemeContext);
  return(
    <div className="avatar">
      <img src={info.avatar_url} />
    </div>
  )
}

export default Avatar