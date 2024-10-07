import logo from "./logo.svg";
import "./App.css";

import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import AddGeneralDiary from "./pages/AddGeneralDiary";
import ViewGeneralDiary from "./pages/ViewGeneralDiary";
import Home from "./pages/Home";
import axios from "axios";
import { getGd } from "./store/homeSlice";
function App() {
  const refresh = useSelector(state => state.home.refresh);
  const dispatch = useDispatch();
  useEffect(()=>{
    axios.get("http://localhost:8080/fetch")
    .then((res)=>{
      dispatch(getGd(res.data))
      console.log(res.data);
    })
    .catch(()=>{
      toast.error("error loading data");
    })
  },[refresh]);

  return (
    
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/addGd" element={<AddGeneralDiary />} />
          <Route path="/viewGd" element={<ViewGeneralDiary />} />
        </Routes>
        <Toaster/>
      </BrowserRouter>
    
  );
}

export default App;
