import logo from "./logo.svg";
import "./App.css";
import Stocks from "./models/data";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Stock from "./components/Stock";
import Main from "./components/Main";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Stock/:symbol" element={<Stock />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
