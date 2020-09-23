import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Bio from "./component/Bio/Bio";
import {ThemeProvider} from './context/ThemeContext'
import Projects from "./component/projects/Projects";
import Avatar from "./component/avatar/Avata";

function App() {
  const [githubData, setGithubData] = useState({});
  const [reposData, setReposData] = useState([]);

  useEffect(() => {
    fetchData("https://api.github.com/users/andresLemme", setGithubData);
    fetchData("https://api.github.com/users/andresLemme/repos", setReposData);

    console.log(githubData, reposData);
  }, []);

  async function fetchData(url, setter) {
    const getData = await fetch(url);
    const json = await getData.json();

    setter(json);
    console.log(json);
  }
  const contextData = {
    info: githubData,
    repos: reposData
  }
  return (
    <ThemeProvider value={contextData}>
         <Navbar />
         <Avatar/>
        <Bio />
        <Projects/>
    </ThemeProvider>
    
  );
}

export default App;
