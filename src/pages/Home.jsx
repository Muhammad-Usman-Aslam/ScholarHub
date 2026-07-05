import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  Container,
  Row,
  Col,
  Badge,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Hero from "../componets/Hero";

const GetData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBlogs = async () => {
    try {
      const response = await axios.get("https://scholarhub-backend.vercel.app/api/getblogs");
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  const sortedData = [...data].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const latestBlogs = sortedData.slice(0, 6);
  const discoverBlogs = sortedData.slice(6, 11);

  return (
    <>
      <Hero />

      {/* LATEST BLOGS */}
      <Container className="my-5">
        <h1 className="text-center fw-bold text-primary mb-5">
          Latest Scholarships & Jobs
        </h1>

        <Row>
          {latestBlogs.map((v) => (
            <Col lg={4} md={6} sm={12} key={v._id} className="mb-4">
              <Link
                to={`/blog/${v._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card
                  className="shadow h-100 border-0"
                  style={{ cursor: "pointer", transition: "0.3s" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-6px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <Card.Img
                    variant="top"
                    src={`https://scholarhub-backend.vercel.app/api/img/${v._id}`}
                    style={{ height: "200px", objectFit: "cover" }}
                  />

                  <Card.Body>
                    <Badge bg="success" className="mb-2">
                      {v.category}
                    </Badge>

                    <Card.Title className="fw-bold" style={{ minHeight: "55px" }}>
                      {v.title}
                    </Card.Title>

                    <Card.Text>
                      <strong>{v.city ? "City" : "Country"}:</strong>{" "}
                      {v.city || v.country}
                    </Card.Text>
                  </Card.Body>

                  <Card.Footer className="bg-white">
                    <small className="text-danger fw-bold">
                      Deadline: {v.deadline}
                    </small>
                    <br />
                    <small className="text-muted">
                      Posted: {new Date(v.createdAt).toLocaleDateString()}
                    </small>
                  </Card.Footer>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

      {/* DISCOVER MORE BLOGS */}
      {discoverBlogs.length > 0 && (
        <Container className="my-5">
          <div
            className="p-4 rounded shadow-sm"
            style={{
              background: "#f8f9fa",
              border: "1px solid #dee2e6",
            }}
          >
            <h3 className="fw-bold text-dark mb-3 text-center">
              Discover More Blogs
            </h3>

            <div className="d-flex flex-column gap-2">
              {discoverBlogs.map((v) => (
                <Link
                  key={v._id}
                  to={`/blog/${v._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="p-3 rounded"
                    style={{
                      background: "#fff",
                      border: "1px solid #e0e0e0",
                      transition: "0.2s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#e9f2ff")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "#fff")
                    }
                  >
                    <h6 className="mb-0 text-primary fw-semibold">
                      {v.title}
                    </h6>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default GetData;