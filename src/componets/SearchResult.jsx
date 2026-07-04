import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Badge, Spinner, Alert } from "react-bootstrap";

const SearchResult = () => {

  const { keyword } = useParams();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const searchData = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        `http://localhost:5000/api/search?keyword=${keyword}`
      );

      setBlogs(res.data);

    } catch (err) {
      console.log(err);
      setBlogs([]);
      setError("Search failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchData();
  }, [keyword]);

  return (
    <Container className="my-5">

      <h2 className="mb-4">
        Search Results for "{keyword}"
      </h2>

      <Row>

        {loading ? (

          <div className="text-center mt-5">
            <Spinner animation="border" variant="primary" />
          </div>

        ) : error ? (

          <Alert variant="danger">{error}</Alert>

        ) : blogs.length > 0 ? (

          blogs.map((v) => (

            <Col lg={4} md={6} key={v._id} className="mb-4">

              <Link
                to={`/blog/${v._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >

                <Card className="shadow h-100">

                  <Card.Img
                    variant="top"
                    src={`http://localhost:5000/api/img/${v._id}`}
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />

                  <Card.Body>

                    <Badge bg="success">
                      {v.category}
                    </Badge>

                    <h5 className="mt-3">
                      {v.title}
                    </h5>

                    <p>
                      <strong>Country:</strong> {v.country}
                    </p>

                    {/* <p>{v.description}</p> */}

                  </Card.Body>
                  <Card.Footer className="bg-white">
                                        <small className="text-danger fw-bold">
                                          Deadline: {v.deadline}
                                        </small>
                  
                                        <br />
                  
                                        <small className="text-muted">
                                          Posted:{" "}
                                          {new Date(v.createdAt).toLocaleDateString()}
                                        </small>
                                      </Card.Footer>

                </Card>

              </Link>

            </Col>

          ))

        ) : (

          <h3 className="text-danger">
            No Data Found
          </h3>

        )}

      </Row>

    </Container>
  );
};

export default SearchResult;
