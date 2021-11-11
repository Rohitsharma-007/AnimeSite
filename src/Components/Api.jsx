import React, { useState, useEffect, useCallback } from "react"
import { Card, Row, Container } from "react-bootstrap"

const url = "https://api.jikan.moe/v3/search/anime?q="

function Api({ searchTerm }) {
  const [anime, setAnime] = useState([])
  const fetchanime = useCallback(async () => {
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      const { results } = data
      const newAnime = results.map((item) => {
        const { mal_id, image_url, score, title, synopsis } = item
        return { id: mal_id, iurl: image_url, score, title, summary: synopsis }
      })
      setAnime(newAnime)
    } catch (error) {
      console.log(error)
    }
  }, [searchTerm])
  useEffect(() => {
    fetchanime()
  }, [searchTerm, fetchanime])

  return (
    <>
      <Container>
        <Row xs={2} md={2} className="g-0 ">
          {anime.map((item) => {
            const { id, iurl, score, title, summary } = item
            return (
              <div className="card padding-zero  border-info " key={id}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <Card.Img variant="top" src={iurl} />
                    <div className="card-img-overlay">
                      <h5 className="card-title text-white">{score}</h5>
                    </div>
                  </div>

                  <div className="col-md-6 ">
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
