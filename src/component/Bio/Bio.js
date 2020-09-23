import React, { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext';


function Bio() {
  const {info} = useContext(ThemeContext);
  return(
    <div>
      <p>{info.bio}</p>
    </div>
  )
}
export default Bio