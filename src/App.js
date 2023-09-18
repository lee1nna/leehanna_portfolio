import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Project from "./components/Project/Project";

function App() {
  return (
    <div className="App" style={{cursor: 'url(cursor.png), auto'}}>
      {/* <Header /> */}
      <Wrapper>
        <Home />
        {/* <Skills />
        <Project /> */}
      </Wrapper>
    </div>
  );
}

export default App;
