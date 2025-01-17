import { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function InfoMeteo() {
  const [meteo, setMeteo] = useState(null);
  const params = useParams();
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    getMeteo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMeteo = async () => {
    try {
      const respons = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          params.Luogo +
          ",&appid=6b25fa696e30fec70677f58c6f48b70e"
      );
      if (respons.ok) {
        const data = await respons.json();
        console.log(data);
        setMeteo(data);
        setWeather(data.weather[0]);
      } else {
        throw new Error("dati meteo non recuperati");
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  return (
    <>
      <h1>Informazioni</h1>

      {meteo && (
        <Container style={{ minHeight: "80vh" }}>
          <h4>
            {meteo.name}, {meteo.sys.country}
          </h4>
          <Row className="justify-content-center mb-5 mt-5">
            <Card
              className="me-3 mb-3"
              border="primary"
              style={{ width: "15rem" }}
            >
              <Card.Header>Temperatura</Card.Header>
              <Card.Body>
                <Card.Text>
                  C°= {Math.floor(meteo.main.temp - 273)} <br /> Max={" "}
                  {Math.floor(meteo.main.temp_max - 273)} <br /> Min=
                  {Math.floor(meteo.main.temp_min - 273)}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="me-3 mb-3"
              border="secondary"
              style={{ width: "15rem" }}
            >
              <Card.Header>Meteo</Card.Header>
              <Card.Body>
                <Card.Text>{weather.description}</Card.Text>
              </Card.Body>
            </Card>
            <Card
              border="info"
              className="me-3 mb-3"
              style={{ width: "15rem" }}
            >
              <Card.Header>Humidity</Card.Header>
              <Card.Body>
                <Card.Text>umidità= {meteo.main.humidity}%</Card.Text>
              </Card.Body>
            </Card>
            <Card
              border="warning"
              className="me-3 mb-3"
              style={{ width: "15rem" }}
            >
              <Card.Header>Vento</Card.Header>
              <Card.Body>
                <Card.Text>velocità= {meteo.wind.speed} Km/h</Card.Text>
              </Card.Body>
            </Card>
            <Card
              border="danger"
              className="me-3 mb-3"
              style={{ width: "15rem" }}
            >
              <Card.Header>Visibilità</Card.Header>
              <Card.Body>
                <Card.Text>{meteo.visibility} Km</Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      )}
    </>
  );
}

export default InfoMeteo;
