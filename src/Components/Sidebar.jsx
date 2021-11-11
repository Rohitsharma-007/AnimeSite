import React, { useState, useRef, useEffect } from "react"
import { FaTimes } from "react-icons/fa"
import { links, social } from "../data"
import Topnavbar from "./Topnavbar"

const Sidebar = function () {
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
      <Topnavbar openSidebar={openSidebar} />
      <aside
        ref={sidebarRef}
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <h3>AnifoundX</h3>
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
export default Sidebar
