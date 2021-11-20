import React from "react";

import Container from "react-bootstrap/Container";
import styled from "styled-components";

import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";
import './components/Main.css'

import Torrents from "./components/Torrents";
import Chintu from "./components/chintu";


const Wrapper = styled(Container)`
  margin-top: 50px;
`;

const App = () => {
  return (
    <Router >
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/home/about">
          <h2 className="wierd">this is my personal porn collectional advised to stay away<br/>Beside that its a very powerfull torrent search engine</h2>
          <Chintu/>
        </Route>  
        <Route exact path="/home/wrongButton">
          <h2 className="wierd">You might wanna click that wierd box at the bottom</h2>
          <Chintu/>
        </Route> 
        <Route exact path="/home/feedback">
          <h2 className="wierd">email - aarhankhan212@gmail.com</h2>
          <Chintu/>
        </Route>  
        <Route exact path="/home/disclamer">
          <h2 className="wierd">remember that this is just a search/indexing tool, your content is not hosted here.<br/> Please be polite. There is no point in threats.</h2>
          <Chintu/>
        </Route>  
        <Route exact path="/home/bdab">
          <h2 className="wierd">accidentally came to earth. it's weird</h2>
          <h2 className="wierd"><a className="I-hate-text-decorations" href="https://github.com/bdab-x">Github</a><br/><a className="I-hate-text-decorations" href="https://twitter.com/bdab__">Twitter</a><br/><a className="I-hate-text-decorations" href="https://www.linkedin.com/in/aarhan-k-62742b196/">Linkedin</a><br/></h2>
          <Chintu/>
        </Route>  

        <Route exact path="/search" >
          <Wrapper>
            <Torrents />
          </Wrapper>
        </Route>

      </Switch>
    </Router>
  );
}


export default App;