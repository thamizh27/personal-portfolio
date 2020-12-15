import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <BrowserRouter>
      <SideBar open={open} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Projects} path="/projects" />
        <Route component={About} path="/about" />
        <Route component={Contact} path="/contact" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
