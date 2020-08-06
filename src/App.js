import React from "react";

import Loading from "./loading.js";
import Navigation from "./components/Navbar";
import HomePage from './components/pages/HomePage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProjectPage from './components/pages/ProjectPage';

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">


          <Route path="/" exact render={() => <Loading />} />
          <Route path="/projects" render={() => <ProjectPage />} />

      </div>
    </Router>
  );
}

export default App; 