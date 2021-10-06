import React from "react"
import Float from "./Float"

import Navbar from "./Navbar"
import Slider from "./Slider"
import SliderSecond from "./SliderSecond"
import Api from "./Api"
import Search from "./Search"
function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Slider />
      <Float />
      <SliderSecond />
      <Api />
    </>
  )
}

export default App
