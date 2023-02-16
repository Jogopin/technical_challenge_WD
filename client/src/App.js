import axios from "axios"
import './App.css';
import AllPhones from './components/AllPhones';
import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import PhoneDetails from "./components/PhoneDetails";

function App() {

  const API_URL = "http://localhost:5000"

   const [allPhonesData , SetAllPhonesData]=useState(null)

  const getAllPhones =()=>{

    axios.get(`${API_URL}/phones`)
      .then(responseAxios=>{
        SetAllPhonesData(responseAxios.data)
      })
      .catch(e=>{
        console.log("error getting all the phones",e)
      })
  }
  
  useEffect(()=>{
    getAllPhones()
  },[])


  return (
    <div className="App">
      
      <AllPhones allPhonesData={allPhonesData}/>
      <Routes>
        <Route exact path="/" element={<h1>WELCOME TO THE PHONE CAVE</h1>}/>
        <Route exact path="/:phoneId" element={<PhoneDetails API_URL={API_URL}/>}/>
        
      </Routes>
      

    </div>
  );
}

export default App;
