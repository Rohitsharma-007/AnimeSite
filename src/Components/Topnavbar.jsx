import React from "react"

import { Navbar, Container } from "react-bootstrap"

const Topnavbar = ({ openSidebar }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container>
          <div className="d-flex justify-content-around ">
            <div className="align-self-center"></div>

            <button
              onClick={openSidebar}
              className="icon-hatake"
              type="button"
              data-toggle="canvas"
            ></button>
          </div>

          <Navbar.Brand href="#home">
            <h1>AnifoundX</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}
export default Topnavbar
