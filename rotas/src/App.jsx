import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>
        <Footer />
    </div>
  );
}

export default App

