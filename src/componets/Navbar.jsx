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
  const [expanded, setExpanded] = useState(false);

  const navigate = useNavigate();

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setExpanded(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const cleanKeyword = keyword.trim().toLowerCase();
    if (!cleanKeyword) return;

    setExpanded(false);
    navigate(`/search/${encodeURIComponent(cleanKeyword)}`);
  };

  return (
    <>
      <style>{`
        .country-dropdown .dropdown-menu{
          max-height:70vh;
          overflow-y:auto;
          overflow-x:hidden;
          scrollbar-width:thin;
        }

        .country-dropdown .dropdown-menu::-webkit-scrollbar{
          width:8px;
        }

        .country-dropdown .dropdown-menu::-webkit-scrollbar-thumb{
          background:#0d6efd;
          border-radius:10px;
        }

        .country-dropdown .dropdown-menu::-webkit-scrollbar-track{
          background:#f1f1f1;
        }
      `}</style>

      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        sticky="top"
        expanded={expanded}
        onToggle={(value) => setExpanded(value)}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>
            ScholarHub
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav" className="justify-content-between">
            <Nav className="mx-auto gap-2 gap-lg-3">

              <Nav.Link as={Link} to="/" onClick={handleNavClick}>
                Home
              </Nav.Link>

              {/* Scholarships */}
              <NavDropdown
                title="Scholarships"
                className="country-dropdown"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/country/australia"
                  onClick={handleNavClick}
                >
                  Australia
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/country/austria"
                  onClick={handleNavClick}
                >
                  Austria
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/country/belgium"
                  onClick={handleNavClick}
                >
                  Belgium
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/country/brazil"
                  onClick={handleNavClick}
                >
                  Brazil
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/country/canada"
                  onClick={handleNavClick}
                >
                  Canada
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/country/china"
                  onClick={handleNavClick}
                >
                  China
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/country/finland"
                  onClick={handleNavClick}
                >
                  Finland
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/country/france"
                  onClick={handleNavClick}
                >
                  France
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/country/germany"
                  onClick={handleNavClick}
                >
                  Germany
                </NavDropdown.Item>
                                <NavDropdown.Item
                  as={Link}
                  to="/country/hungary"
                  onClick={handleNavClick}
                >
                  Hungary
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/country/italy"
                  onClick={handleNavClick}
                >
                  Italy
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/country/japan"
                  onClick={handleNavClick}
                >
                  Japan
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/country/russia"
                  onClick={handleNavClick}
                >
                  Russia
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/country/saudi-arabia"
                  onClick={handleNavClick}
                >
                  Saudi Arabia
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/country/turkey"
                  onClick={handleNavClick}
                >
                  Turkey
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/country/united-states"
                  onClick={handleNavClick}
                >
                  United States
                </NavDropdown.Item>
              </NavDropdown>

              {/* Jobs */}
              <NavDropdown title="Jobs">
                <NavDropdown.Item
                  as={Link}
                  to="/category/government-jobs"
                  onClick={handleNavClick}
                >
                  Government Jobs
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/category/private-jobs"
                  onClick={handleNavClick}
                >
                  Private Jobs
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/category/multinational-companies"
                  onClick={handleNavClick}
                >
                  Multinational Companies
                </NavDropdown.Item>

                <NavDropdown.Item
                  as={Link}
                  to="/category/internships"
                  onClick={handleNavClick}
                >
                  Internships
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                as={Link}
                to="/blogs"
                onClick={handleNavClick}
              >
                Blogs
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/contact"
                onClick={handleNavClick}
              >
                Contact Us
              </Nav.Link>
            </Nav>

            <Form
              className="d-flex"
              onSubmit={handleSearch}
            >
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
    </>
  );
}

export default NavigationBar;