import React, { useState, useEffect } from "react"
import { Card, Row, Col, Button, Container } from "react-bootstrap"

const url = "https://api.jikan.moe/v3/top/anime"

function Api() {
  const [loading, setLoading] = useState(true)
  const [anime, setAnime] = useState([])
  const fetchanime = async () => {
    setLoading(true)

    try {
      const response = await fetch(url)
      const data = await response.json()
      const { top } = data
      const newAnime = top.map((item) => {
        const { mal_id, image_url, score, title, synopsis } = item
        return { id: mal_id, iurl: image_url, score, title, summary: synopsis }
      })
      setAnime(newAnime)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchanime()
  }, [])

  return (
    <>
      <Container>
        <Row xs={2} md={2} className="g-0 ">
          {anime.map((item) => {
            const { id, iurl, score, title, summary } = item

            return (
              <div class="card padding-zero  border-info ">
                <div class="row g-0">
                  <div class="col-md-4">
                    <Card.Img variant="top" src={iurl} />
                  </div>
                  <div class="col-md-6 ">
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{summary}</Card.Text>
                    </Card.Body>
                  </div>
                </div>
              </div>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default Api
