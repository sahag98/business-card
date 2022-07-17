import './App.css';
import React from "react"

import Profile from "./components/Profile"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
  return (
      <div className="App">
          <Profile />
          <About />
          <Interests />
          <Footer />
      </div>
  )
}