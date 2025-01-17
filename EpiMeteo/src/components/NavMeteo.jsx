import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

function NavMeteo() {
  const location = useLocation();
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <img
            alt="Meteo logo"
            src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Weather_%28iOS%29.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          EpiMeteo
        </Navbar.Brand>
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavMeteo;
