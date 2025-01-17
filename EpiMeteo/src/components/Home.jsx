import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const torino = "Torino";
  const tokyo = "Tokyo";
  const NY = "new york";

  return (
    <Container className="pt-4">
      <h1>Selezionare la città per consultare il meteo</h1>
      <Row className="mb-3">
        <Link to={"/info/" + torino}>
          <Card className="bg-dark text-white w-50">
            <Card.Img
              src="https://assets.voxcity.com/uploads/blog_images/Do-you-think-Rome-is-the-most-beautiful-city-in-the-world-image-main_original.jpg"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Roma</Card.Title>
              <Card.Text>
                Informazioni meteo aggiornate della città di Roma. Qui troverai
                dettagli come la temperatura attuale e le condizioni
                atmosferiche, tutto racchiuso in un formato compatto e facile da
                consultare.
              </Card.Text>
              <Card.Text>clicca per info</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Link>
      </Row>
      <Row className="mb-3">
        <Link to={"/info/" + tokyo}>
          <Card className="bg-dark text-white w-50">
            <Card.Img
              src="https://assets.voxcity.com/uploads/blog_images/Do-you-think-Rome-is-the-most-beautiful-city-in-the-world-image-main_original.jpg"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Roma</Card.Title>
              <Card.Text>
                Informazioni meteo aggiornate della città di Roma. Qui troverai
                dettagli come la temperatura attuale e le condizioni
                atmosferiche, tutto racchiuso in un formato compatto e facile da
                consultare.
              </Card.Text>
              <Card.Text>clicca per info</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Link>
      </Row>
      <Row className="mb-3">
        <Link to={"/info/" + NY}>
          <Card className="bg-dark text-white w-50">
            <Card.Img
              src="https://assets.voxcity.com/uploads/blog_images/Do-you-think-Rome-is-the-most-beautiful-city-in-the-world-image-main_original.jpg"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Roma</Card.Title>
              <Card.Text>
                Informazioni meteo aggiornate della città di Roma. Qui troverai
                dettagli come la temperatura attuale e le condizioni
                atmosferiche, tutto racchiuso in un formato compatto e facile da
                consultare.
              </Card.Text>
              <Card.Text>clicca per info</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Link>
      </Row>
    </Container>
  );
}

export default Home;
