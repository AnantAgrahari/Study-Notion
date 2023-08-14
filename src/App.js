import {Routes,Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import {useState} from "react";

function App() {
  const[isLoggedIn, setIsLoggedIn]=useState(false);
  return (
   <div>
       
       
     <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      



       <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        
       </Routes>
   </div>
  );
}

export default App;
