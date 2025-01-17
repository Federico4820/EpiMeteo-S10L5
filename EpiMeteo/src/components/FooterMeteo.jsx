import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";

function FooterMeteo() {
  return (
    <Container fluid className="bg-black">
      <Card className="text-center bg-transparent text-light">
        <Card.Body>
          <Card.Title as="h2">Epimeteo.it</Card.Title>
          <Card.Text>
            <p style={{ color: "gray", fontSize: "80%" }}>versione α</p>
            <p>
              svillupato da <i>Federico Lepore</i>, anche se avrei preferito
              tanto fare di più
            </p>
            <div className="row justify-content-center mt-5">
              <div className="col col-6">
                <div className="row">
                  <div className="col mb-2 mt-2 copyright">
                    © GlobalMeteo Inc.
                  </div>
                </div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default FooterMeteo;
