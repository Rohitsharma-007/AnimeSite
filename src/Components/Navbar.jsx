import React, { useState, useRef, useEffect } from "react"
import { FaBars } from "react-icons/fa"
import { FaTimes } from "react-icons/fa"
import { links, social } from "../data"

import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"

const Navbarr = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  const sidebarRef = useRef()
  useEffect(() => {
    let handler = (e) => {
      if (!sidebarRef.current.contains(e.target)) {
        setIsSidebarOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container>
          <Button onClick={openSidebar} className="sidebar-toggler">
            <FaBars />
          </Button>
          <Navbar.Brand href="#home">
            <h1>AnimeX</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/*------------------------------ sidebar start ---------------------------------- */}

      <aside
        ref={sidebarRef}
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <img src="" className="logo" alt="coding addict" />
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, url, text, icon } = link
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
        <ul className="social-icons">
          {social.map((link) => {
            const { id, url, icon } = link
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </aside>
    </>
  )
}
export default Navbarr
