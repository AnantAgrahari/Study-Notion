import {Routes,Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
   <div>
    <Navbar/>
      



       <Routes>
        <Route path="/" element={<Home />} >
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
       </Routes>
   </div>
  );
}

export default App;
