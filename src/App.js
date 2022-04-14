import React from 'react'
import { ToastContainer } from 'react-toastify';
import './App.css';
import { Route, Routes } from "react-router-dom"
import Navigation from './Components/Navigation';
import Add from './Components/Add';
import Edit from './Components/Edit';
import Home from './Components/Home';
import { connect } from 'react-redux';


function App() {


  return (
    <div className="App">
      <ToastContainer />
      <Navigation />
      <Routes>
        <Route path="/" index element={<Home />} >
        </Route>
        <Route path="add" element={<Add />} />
        <Route path="edit/:id" element={<Edit />} />
      </Routes>
     
      
    </div>
  );
}





export default connect()(App);
