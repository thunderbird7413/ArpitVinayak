import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import { HomeScreen } from "./screens/HomeScreen/HomeScreen";
import { Header } from "./screens/HomeScreen/Javascript/Header.js";
import { StudentTeam } from "./screens/HomeScreen/Javascript/StudentTeam";
import { Beladi } from "./screens/HomeScreen/Javascript/Villages/Beladi";
import { Gopalpur } from "./screens/HomeScreen/Javascript/Villages/Gopalpur.js";
import { Rithaura } from "./screens/HomeScreen/Javascript/Villages/Rithaura.js";
import { Meerpur } from "./screens/HomeScreen/Javascript/Villages/Meerpur.js";
import { Puranpur } from "./screens/HomeScreen/Javascript/Villages/Puranpur.js";
import { InitCard_Events } from "./screens/Events/InitCard_Events";
import { Component } from "react";
import { Work } from "./screens/HomeScreen/Javascript/Work";
import About from "./screens/HomeScreen/Javascript/About";
import {Faculty} from "./screens/HomeScreen/Javascript/Faculty";
import {Contact} from "./screens/HomeScreen/Javascript/Contact";
import { Team22_23 } from "./screens/HomeScreen/Javascript/Team22_23.js";
import { Team2021 } from "./screens/HomeScreen/Javascript/Team2021.js";
import Footer1 from './screens/HomeScreen/Javascript/Footer1';
import {Team21_22} from "./screens/HomeScreen/Javascript/Team21_22.js";
import { Waste_Management } from "./screens/Initiatives/Waste_Management.js";
import { Agriculture } from "./screens/Initiatives/Agriculture.js";
import { Health } from "./screens/Initiatives/Health.js";
import { Education } from "./screens/Initiatives/Education.js";
import { SHGs } from "./screens/Initiatives/SHGs.js";

class App extends Component{
  render()
  {
    return(
      <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' exact element={<HomeScreen/>}></Route>
          <Route path='/beladi' exact element={<Beladi/>}></Route>
          <Route path='/gopalpur' exact element={<Gopalpur/>}></Route>
          <Route path='/rithaura' exact element={<Rithaura/>}></Route>
          <Route path='/meerpur' exact element={<Meerpur/>}></Route>
          <Route path='/puranpur' exact element={<Puranpur/>}></Route>
          <Route path='/about' exact element={<About/>}></Route>
          <Route path='/Studentteam' exact element={<StudentTeam/>}></Route>
          <Route path='/Studentteam22_23' exact element={<Team22_23/>}></Route>
          <Route path='/Studentteam21_22' exact element={<Team21_22/>}></Route>
          <Route path='/Studentteam20_21' exact element={<Team2021/>}></Route>
          <Route path='/waste_management' exact element={<Waste_Management/>}></Route>
          <Route path='/education' exact element={<Education/>}></Route>
          <Route path='/agriculture' exact element={<Agriculture/>}></Route>
          <Route path='/health' exact element={<Health/>}></Route>
          <Route path='/shgs' exact element={<SHGs/>}></Route>
          <Route path='/work' exact element={<Work/>}></Route>
          <Route path='/events' exact element={<InitCard_Events/>}></Route>
          <Route path='/faculty' exact element={<Faculty/>}></Route>
          <Route path='/contact' exact element={<Contact/>}></Route>
        </Routes>
        <Footer1/>
      </BrowserRouter>
      </>
    )
  }
};

export default App;