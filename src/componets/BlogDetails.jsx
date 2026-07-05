import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Container,
  Card,
  Spinner,
  Alert,
  Badge,
  Row,
  Col,
  Button,
} from "react-bootstrap";

const BlogDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    if (id) getBlog();
  }, [id]);

  const getBlog = async () => {
    try {
      setLoading(true);
      setError("");

      // MAIN BLOG
      const res = await axios.get(
        `https://scholarhub-backend.vercel.app/api/getblog/${id}`
      );

      if (!res.data) throw new Error("No blog found");

      setBlog(res.data);

      // RELATED BLOGS (FIXED)
      try {
        const relatedRes = await axios.get(
          `https://scholarhub-backend.vercel.app/api/getblogs?category=${encodeURIComponent(
            res.data.category
          )}`
        );

        setRelatedBlogs(
          (relatedRes.data || []).filter((b) => b._id !== res.data._id)
        );
      } catch (err) {
        setRelatedBlogs([]);
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Blog details could not be loaded."
      );
      setBlog(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-2">Loading blog details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <Alert variant="danger">
          <strong>Error:</strong> {error}
        </Alert>
      </Container>
    );
  }

  if (!blog) {
    return (
      <Container className="my-5">
        <Alert variant="warning">Blog not found.</Alert>
      </Container>
    );
  }

  const documents = blog.documents || [];

  return (
    <Container className="my-5">
      <Card className="shadow-lg border-0 overflow-hidden">

        {/* IMAGE */}
        <div style={{ background: "#fff", padding: "20px", textAlign: "center" }}>
          <img
            src={`https://scholarhub-backend.vercel.app/api/img/${blog._id}`}
            alt={blog.title}
            className="img-fluid"
            style={{
              width: "100%",
              maxHeight: "700px",
              objectFit: "contain",
              borderRadius: "10px",
            }}
          />
        </div>

        <Card.Body className="p-4 p-lg-5">

          {/* CATEGORY */}
          <Badge bg="success" className="mb-3 fs-6">
            {blog.category}
          </Badge>

          <h2 className="fw-bold mb-4">{blog.title}</h2>

          {/* BASIC INFO */}
          <Row className="mb-4">
            <Col md={4}>
              <p>
                <strong>{blog.city ? "City" : "Country"}:</strong>{" "}
                {blog.city || blog.country}
              </p>
            </Col>

            <Col md={4}>
              <p>
                <strong>Deadline:</strong> {blog.deadline}
              </p>
            </Col>

            <Col md={4}>
              <p>
                <strong>Posted:</strong>{" "}
                {new Date(blog.createdAt).toLocaleDateString()}
              </p>
            </Col>
          </Row>

          <hr />

          {/* DESCRIPTION */}
          <h4 className="fw-bold">Description</h4>
          <p style={{ lineHeight: "2", textAlign: "justify" }}>
            {blog.description}
          </p>

          <hr />

          {/* BENEFITS */}
          <h4 className="fw-bold">Benefits</h4>
          <ul>
            {blog.benefit?.split("\n").map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>

          <hr />

          {/* CRITERIA */}
          <h4 className="fw-bold">Eligibility Criteria</h4>
          <p style={{ lineHeight: "2", textAlign: "justify" }}>
            {blog.criteria?.split("\n").map((item, index) => (
              <span key={index}>
                {item}
                <br />
              </span>
            ))}
          </p>

          <hr />

          {/* DOCUMENTS */}
          <h4 className="fw-bold">Required Documents</h4>

          {documents.length > 0 && (
            <p className="mb-2">{documents[0]}</p>
          )}

          <ul>
            {documents.slice(1).map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>

          <hr />

          {/* APPLY */}
          <h4 className="fw-bold">How to Apply</h4>
          <ol>
            {blog.apply
              ?.split("\n")
              .filter((item) => item.trim() !== "")
              .map((item, index) => (
                <li key={index} className="mb-2">
                  {item.trim()}
                </li>
              ))}
          </ol>

          <hr />

          {/* RELATED BLOGS */}
          <Container className="my-4 p-4 shadow-sm border rounded bg-light">
            <h5 className="fw-bold mb-3">Related Blogs</h5>

            <div
              style={{
                maxHeight: "250px",
                overflowY: "auto",
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
              }}
            >
              {relatedBlogs.length === 0 ? (
                <p className="mb-0">No related blogs found</p>
              ) : (
                relatedBlogs.map((item) => (
                  <div
                    key={item._id}
                    style={{
                      padding: "8px 10px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    <a
                      href={`/blog/${item._id}`}
                      style={{
                        textDecoration: "none",
                        color: "#0d6efd",
                        fontWeight: "500",
                      }}
                    >
                      {item.title}
                    </a>
                  </div>
                ))
              )}
            </div>
          </Container>

          {/* WEBSITE */}
          {blog.website && (
            <>
              <h4 className="fw-bold">Official Website</h4>

              <div className="mt-4 text-center">
                <p>For application submission and full eligibility details, please proceed to the official website.</p>
                <Button
                  variant="primary"
                  size="lg"
                  href={blog.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🌐 Visit Official Website
                </Button>
              </div>
            </>
          )}

        </Card.Body>
      </Card>
    </Container>
  );
};

export default BlogDetails;