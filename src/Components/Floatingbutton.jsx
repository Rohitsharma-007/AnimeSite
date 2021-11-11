import React, { useState } from "react"
import { FaBars } from "react-icons/fa"
import { FaTimes } from "react-icons/fa"

function Floatingbutton() {
  const [isFoaOpen, setIsFoaOpen] = useState(false)
  const openFoa = () => {
    setIsFoaOpen(true)
  }
  const closeFoa = () => {
    setIsFoaOpen(false)
  }

  return (
    <div className="mobile-nav">
      <div className={`${isFoaOpen ? "hamburger d-none" : "hamburger"}`}>
        <button className="custom-button" onClick={openFoa}>
          <FaBars />
        </button>
      </div>
      <div className="hamburger-menu">
        <div className={`${isFoaOpen ? "menu menu-visible" : "menu"}`}>
          <a href="/#">
            <FaBars />
            <div>Home</div>
          </a>
          <a href="#topanime">
            <FaBars />
            <div>Topani</div>
          </a>
          <a href="#search">
            <FaBars />
            <div>Search</div>
          </a>

          <FaBars />
          <FaBars />

          <button className="close-btn" onClick={closeFoa}>
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Floatingbutton
