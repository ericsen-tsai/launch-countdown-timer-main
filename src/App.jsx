import React from "react"

import TimeClockContainer from "./components/TimeClockContainer"
import Footer from "./components/Footer"

import "./App.scss"

const App = () => {
  return (
    <div className="container">
      <TimeClockContainer />
      <Footer />
    </div>
  )
}

export default App
