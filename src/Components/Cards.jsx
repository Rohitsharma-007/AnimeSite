import React from "react"
import { Card, Row, Col, Button } from "react-bootstrap"
function Cards() {
  return (
    <Row xs={2} md={4} className="g-0 ">
      <Col className="padding-zero ">
        <Card className="border border-primary rounded">
          <Card.Img variant="top" src="https://picsum.photos/580" />
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
          <Card.Img variant="top" src="https://picsum.photos/480" />
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
          <Card.Img variant="top" src="https://picsum.photos/1080" />
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
          <Card.Img variant="top" src="https://picsum.photos/720" />
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
