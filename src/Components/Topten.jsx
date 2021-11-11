import React, { useState, useEffect } from "react"
import { Card, Row, Container } from "react-bootstrap"

const url = "https://api.jikan.moe/v3/top/anime"

function Topten() {
  const [anime, setAnime] = useState([])
  const fetchanime = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      const { top } = data
      const newAnime = top.map((item) => {
        const { mal_id, rank, image_url, score, title, episodes } = item
        return { id: mal_id, iurl: image_url, score, title, episodes, rank }
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
    <section id="topanime">
      <h2
        style={{}}
        className=" text-primary d-flex p-4  justify-content-center"
      >
        Top Anime
      </h2>
      <Container>
        <Row xs={2} md={2} className="g-0 ">
          {anime.map((item) => {
            const { id, iurl, score, title, rank, episodes } = item
            return (
              <div className="card padding-zero  border-info " key={id}>
                <div className="row g-0">
                  <div className="col-md-3">
                    <Card.Img variant="top" src={iurl} />
                    <div className="card-img-overlay">
                      <h5 className="card-title text-white">{score}</h5>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <Card.Body>
                      <h2>{rank}</h2>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>Number of Episodes = {episodes}</Card.Text>
                    </Card.Body>
                  </div>
                </div>
              </div>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default Topten
