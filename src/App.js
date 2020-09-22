import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Bio from "./component/Bio/Bio";
import ThemeContext from "./context/ThemeContext";
import Projects from "./component/projects/Projects";

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
    <ThemeContext value={contextData}>
      <div className="App">
        <Navbar />
        <Bio />
        <Projects/>
      </div>
    </ThemeContext>
  );
}

export default App;
