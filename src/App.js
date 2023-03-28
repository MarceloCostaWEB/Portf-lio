import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import About from "./pages/Sobre";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title=""
          subtitle= {<Home />}
          dark={false}
          id="Home"
        />
        <Section
          title="Projetos"
          subtitle={<Projetos />}
          dark={true}
          id="Projetos"
        />
        <Section
          title=""
          subtitle={<About />}
          dark={false}
          id="Sobre"
        />
        <Section
          title="Contatos"
          subtitle={<Contacts />}
          dark={true}
          id="Contatos"
        />
      </div>
    );
  }
}

export default App;
