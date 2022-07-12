import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import  {HomeScreen}  from "./screens/HomeScreen/HomeScreen";
import  {Header} from "./screens/HomeScreen/Javascript/Header.js";
import {StudentTeam}  from "./screens/HomeScreen/Javascript/StudentTeam";
import { Beladi } from "./screens/HomeScreen/Javascript/Villages/Beladi";
import { Chandpur } from "./screens/HomeScreen/Javascript/Villages/Chandpur";
import { Chharba } from "./screens/HomeScreen/Javascript/Villages/Chharba";
import { Meerpur } from "./screens/HomeScreen/Javascript/Villages/Meerpur.js";
import { Puranpur } from "./screens/HomeScreen/Javascript/Villages/Puranpur.js";
import {InitCard_Events} from "./screens/Events/InitCard_Events"
import Inspiration from "./screens/HomeScreen/Javascript/Inspiration";

export default function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
    </Router>
    </>
  );
}
