import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const torino = "Torino";
  const tokyo = "Tokyo";
  const NY = "new york";

  return (
    <Container className="pt-4">
      <h1>Selezionare la città per consultare il meteo</h1>
      <Row className="mb-3 justify-content-center">
        <Link to={"/info/" + torino}>
          <Card className="bg-dark text-white p-0">
            <Card.Img
              src="https://media.istockphoto.com/id/636399938/it/foto/paesaggio-urbano-di-torino-allalba.jpg?s=612x612&w=0&k=20&c=yemCm6bo7EFGa_CcPZfKIZ5lNfNY7e3tjfi-xITU0hU="
              alt="Card image"
            />

            <Card.ImgOverlay>
              <Card.Title>Torino</Card.Title>
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
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://a.storyblok.com/f/55469/1170x728/686a5d2781/jp_00_tyo_1.jpeg/m/filters:format(webp)"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Tokyo</Card.Title>
              <Card.Text>
                Informazioni meteo aggiornate della città di Tokyo. Qui troverai
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
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://images.musement.com/cover/0002/42/view-on-manhattan-at-night-new-york-city_header-141511.jpeg"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>New York</Card.Title>
              <Card.Text>
                Informazioni meteo aggiornate della città di New York. Qui
                troverai dettagli come la temperatura attuale e le condizioni
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
