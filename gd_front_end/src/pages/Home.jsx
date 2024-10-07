import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
const Home = () => {
    const nav = useNavigate();
    const [show, setShow] = useState("none");
  const showOptions = () => {
    setShow("block");
  };
  const hideOptions = () => {
    setShow("none");
  };
  return (
    <div
          onMouseOver={showOptions}
          onMouseOut={hideOptions}
          
        >
            <div style={{display:'flex', alignItems:"center"}}>
          <div style={{    fontWeight: "bold", fontSize:"1.17em" }}>General Diary</div>
          <div style={{ display: show }}>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                nav("/addGd");
              }}
            >
              Add General diary /{" "}
            </span>
            <span
              onClick={() => {
                nav("/viewGd");
              }}
              style={{ cursor: "pointer" }}
            >
              View General diary
            </span>
          </div>
          </div>
        </div>
  )
}

export default Home