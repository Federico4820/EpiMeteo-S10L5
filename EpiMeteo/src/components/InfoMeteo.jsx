import { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function InfoMeteo() {
  const [meteo, setMeteo] = useState(null);
  const params = useParams();

  useEffect(() => {
    getMeteo();
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
        <Container className="mb-5 mt-5">
          <Row>
            <Card border="primary" style={{ width: "18rem" }}>
              <Card.Header>Temperatura</Card.Header>
              <Card.Body>
                <Card.Text>
                  F°= {meteo.main.temp} <br /> Max= {meteo.main.temp_max} <br />{" "}
                  Min={meteo.main.temp_min}
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      )}
    </>
  );
}

export default InfoMeteo;
