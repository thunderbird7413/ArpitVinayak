import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import { HomeScreen } from "./screens/HomeScreen/HomeScreen";
import { Header } from "./screens/HomeScreen/Javascript/Header.js";
import { StudentTeam } from "./screens/HomeScreen/Javascript/StudentTeam";
import { Beladi } from "./screens/HomeScreen/Javascript/Villages/Beladi";
import { Chandpur } from "./screens/HomeScreen/Javascript/Villages/Chandpur";
import { Chharba } from "./screens/HomeScreen/Javascript/Villages/Chharba";
import { Meerpur } from "./screens/HomeScreen/Javascript/Villages/Meerpur.js";
import { Puranpur } from "./screens/HomeScreen/Javascript/Villages/Puranpur.js";
import { InitCard_Events } from "./screens/Events/InitCard_Events";
import { Component } from "react";
import { Work } from "./screens/HomeScreen/Javascript/Work";
import About from "./screens/HomeScreen/Javascript/About";
import {Faculty} from "./screens/HomeScreen/Javascript/Faculty";
import {Contact} from "./screens/HomeScreen/Javascript/Contact";

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
          <Route path='/chandpur' exact element={<Chandpur/>}></Route>
          <Route path='/chharba' exact element={<Chharba/>}></Route>
          <Route path='/meerpur' exact element={<Meerpur/>}></Route>
          <Route path='/puranpur' exact element={<Puranpur/>}></Route>
          <Route path='/about' exact element={<About/>}></Route>
          <Route path='/Studentteam' exact element={<StudentTeam/>}></Route>
          <Route path='/work' exact element={<Work/>}></Route>
          <Route path='/events' exact element={<InitCard_Events/>}></Route>
          <Route path='/faculty' exact element={<Faculty/>}></Route>
          <Route path='/contact' exact element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
      </>
    )
  }
};

export default App;