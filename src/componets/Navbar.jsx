import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function NavigationBar() {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleSearch = (e) => {
    e.preventDefault();

    if (!keyword.trim()) return;

    navigate(`/search/${encodeURIComponent(keyword.trim())}`);
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Container>

        <Navbar.Brand as={Link} to="/">
          ScholarHub
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse
          id="navbar-nav"
          className="justify-content-between"
        >
          <Nav className="mx-auto gap-2 gap-lg-3">

            <Nav.Link as={Link} to="/"
             onClick={scrollToTop}
            >
              Home
            </Nav.Link>

            <NavDropdown
              title="Scholarships"
              id="scholarships-dropdown"
            >
              <NavDropdown.Item as={Link}  onClick={scrollToTop} to="/country/Australia">
                Australia
              </NavDropdown.Item>

              <NavDropdown.Item as={Link}  onClick={scrollToTop} to="/country/Italy">
                Italy
              </NavDropdown.Item>

              <NavDropdown.Item as={Link}  onClick={scrollToTop} to="/country/China">
                China
              </NavDropdown.Item>

              <NavDropdown.Item as={Link}  onClick={scrollToTop} to="/country/Turkey">
                Turkey
              </NavDropdown.Item>

              <NavDropdown.Item as={Link}  onClick={scrollToTop} to="/country/Germany">
                Germany
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Jobs"
              id="jobs-dropdown"
            >
              {/* Must match your database category exactly */}

              <NavDropdown.Item
                as={Link}
                to="/category/Government Jobs"
              >
                Government Jobs
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}  onClick={scrollToTop}
                to="/category/Private Jobs"
              >
                Private Jobs
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}  onClick={scrollToTop}
                to="/category/Multinational Companies"
              >
                Multinational Companies
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link  as={Link}  onClick={scrollToTop}  to="/blogs">
              Blogs
            </Nav.Link>

            <Nav.Link as={Link}  onClick={scrollToTop} to="/contact">
              Contact Us
            </Nav.Link>

          </Nav>

          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search Scholarships..."
              className="me-2"
              style={{ width: "260px" }}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />

            <Button
              variant="light"
              type="submit"
            >
              Search
            </Button>
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;