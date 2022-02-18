import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="flex text-slate-200 h-screen mx-60">
    <BrowserRouter>
      <Navbar/>
      <div className="container">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
      </Routes>
      </div>
    </BrowserRouter>
    </div>

  );
}

export default App;
