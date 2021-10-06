import React, { useState } from "react"
import { InputGroup, FormControl } from "react-bootstrap"

import { FaSearchengin } from "react-icons/fa"

let Search = () => {
  const [searchTerm, setSearchTerm] = useState("NARUTO")
  const searchValue = React.useRef()
  const searchAnime = () => {
    console.log(setSearchTerm(searchValue.current.value))
  }

  return (
    <>
      <div className="container mb-5 ">
        <InputGroup size="lg">
          <FormControl
            className=" border-info rounded-pill "
            placeholder="Search"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
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
    </>
  )
}

export default Search
