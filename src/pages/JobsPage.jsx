import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Badge, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const JobsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBlogs = async () => {
    try {
      const res = await axios.get("https://scholarhub-backend.vercel.app/api/getblogs");
      setBlogs(res.data);
    } catch (err) {
      console.log(err);
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
        <Spinner animation="border" />
      </div>
    );
  }

  // 👉 filter only job-related categories
  const jobBlogs = blogs.filter((b) =>
    b.category.toLowerCase().includes("job")
  );

  const categories = [...new Set(jobBlogs.map((b) => b.category))];

  return (
    <Container className="my-5">
      <h1 className="text-center text-primary fw-bold mb-5">
        Jobs
      </h1>

      {categories.map((category) => (
        <div key={category} className="mb-5">
          <h2 className="mb-4 border-bottom pb-2 text-success">
            {category}
          </h2>

          <Row>
            {jobBlogs
              .filter((blog) => blog.category === category)
              .map((blog) => (
                <Col lg={4} md={6} sm={12} key={blog._id} className="mb-4">
                  <Link
                    to={`/blog/${blog._id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Card className="shadow h-100">
                      <Card.Img
                        variant="top"
                        src={`https://scholarhub-backend.vercel.app/api/img/${blog._id}`}
                        style={{ height: "220px", objectFit: "cover" }}
                      />

                      <Card.Body>
                        <Badge bg="primary" className="mb-2">
                          {blog.category}
                        </Badge>

                        <Card.Title>{blog.title}</Card.Title>

                        <Card.Text>
                          <strong>Country:</strong> {blog.country}
                        </Card.Text>

                        <Card.Text style={{ height: "70px", overflow: "hidden" }}>
                          {blog.description}
                        </Card.Text>
                      </Card.Body>

                      <Card.Footer>
                        <small className="text-danger">
                          Deadline: {blog.deadline}
                        </small>
                      </Card.Footer>
                    </Card>
                  </Link>
                </Col>
              ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default JobsPage;