import React from "react"
import { Carousel } from "react-bootstrap"
import Cards from "./Cards"

function SliderSecond() {
  return (
    <Carousel fade variant="dark" className="container">
      <Carousel.Item>
        <Cards
          src1="assets/images/ken.gif"
          src2="assets/images/gojo.gif"
          src3="assets/images/nojjk.gif"
          src4="assets/images/mono.gif"
        />
        <Carousel.Caption>
          <h3>first slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Cards
          src1="assets/images/kayori.gif"
          src2="assets/images/your.gif"
          src3="assets/images/su.gif"
          src4="assets/images/sai.gif"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Cards
          src1="assets/images/nojjk.gif"
          src2="assets/images/sai.gif"
          src3="assets/images/su.gif"
          src4="assets/images/gojo.gif"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
export default SliderSecond
