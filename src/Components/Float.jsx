import React, { useState } from "react"
import { FaBars } from "react-icons/fa"
import { FaTimes } from "react-icons/fa"

function Float() {
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
          <FaBars />
          <FaBars />
          <FaBars />
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

export default Float
