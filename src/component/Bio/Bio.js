import React, { useContext } from 'react'
import "./Bio.scss"
import ThemeContext from '../../context/ThemeContext';


function Bio() {
  const {info} = useContext(ThemeContext);
  return(
    <div className="bio_box">
      <p>{info.bio}</p>
    </div>
  )
}
export default Bio