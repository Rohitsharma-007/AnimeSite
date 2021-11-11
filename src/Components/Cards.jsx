import React from "react"
import { Card, Row, Col, Button } from "react-bootstrap"
function Cards(props) {
  return (
    <Row xs={2} md={4} className="g-0 ">
      <Col className="padding-zero ">
        <Card className="border border-primary rounded">
          <Card.Img variant="top" src={props.src1} />
          <Card.Body className="d-none d-sm-block">
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col className="padding-zero">
        <Card className="border border-primary rounded">
          <Card.Img variant="top" src={props.src2} />
          <Card.Body className="d-none d-sm-block">
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col className="padding-zero">
        <Card className="border border-primary rounded">
          <Card.Img variant="top" src={props.src3} />
          <Card.Body className="d-none d-sm-block">
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col className="padding-zero">
        <Card className="border border-primary rounded">
          <Card.Img variant="top" src={props.src4} />
          <Card.Body className="d-none d-sm-block">
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}
export default Cards
