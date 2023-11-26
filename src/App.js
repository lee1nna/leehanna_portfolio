import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Project from "./components/Project/Project";
import { useState } from "react";

function App() {

  const [cursorStyle, setCursorStyle] = useState(`url('${process.env.PUBLIC_URL}/cursor.png'), auto`)

  const handleMounseDown = () => {
    setCursorStyle(`url('${process.env.PUBLIC_URL}/cursor2.png'), auto`)
  }

  const handleMounseUp = () => {
    setCursorStyle(`url('${process.env.PUBLIC_URL}/cursor.png'), auto`)
  }
  
  return (
    <div className="App" style={{cursor: cursorStyle}} onMouseDown={handleMounseDown} onMouseUp={handleMounseUp}>
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
