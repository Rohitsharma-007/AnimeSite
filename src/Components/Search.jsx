import React, { useState, useRef } from "react"
import { InputGroup, FormControl } from "react-bootstrap"
// import { FaSearchengin } from "react-icons/fa"
import Api from "./Api"

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("naruto")
  const searchValue = useRef("")

  const searchAnime = () => {
    setSearchTerm(searchValue.current.value)
  }

  return (
    <>
      <div id="search" className="container my-5 ">
        <InputGroup size="lg">
          <FormControl
            className=" border-info rounded-pill "
            placeholder="Search"
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchAnime}
          />
          {/* <InputGroup.Text 
            id="inputGroup-sizing-lg"
            className=" border-info rounded-pill "
            style={{ backgroundColor: "white" }}
          >
            <FaSearchengin size={30} />
          </InputGroup.Text>*/}
        </InputGroup>
      </div>
      <Api searchTerm={searchTerm} />
    </>
  )
}

export default Search
