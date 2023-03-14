import React from "react";
import "./App.css";
import Student from "./components/Student";
import {Calander} from "./components/Calander";
import SideBar from './components/SideBar';

function App() {
  return (
    <div style={{display:'flex'}}>
    <SideBar />
  <Calander />;
    </div>
  )
}

export default App; 
