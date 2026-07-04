import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Spinner,
} from "react-bootstrap";

const normalizeCategory = (value = "") => {
  return decodeURIComponent(value).trim().toLowerCase();
};

const CategoryBlogs = () => {
  const { category } = useParams();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/getblog");

        const selectedCategory = normalizeCategory(category);

        const filteredBlogs = res.data.filter(
          (blog) =>
            blog.category &&
            normalizeCategory(blog.category) === selectedCategory
        );

        setBlogs(filteredBlogs);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, [category]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <Container className="my-5">
      <h2 className=" text-primary mb-5">
        {decodeURIComponent(category)}
      </h2>

      <Row>
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <Col lg={4} md={6} sm={12} key={blog._id} className="mb-4">
              <Link
                to={`/blog/${blog._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card className="shadow h-100 border-0">

                  <Card.Img
                    variant="top"
                    src={`http://localhost:5000/api/img/${blog._id}`}
                    style={{
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />

                  <Card.Body>

                    <Badge bg="success" className="mb-2">
                      {blog.category}
                    </Badge>

                    <Card.Title>{blog.title}</Card.Title>

                    <Card.Text>
                      <strong>Country:</strong> {blog.country}
                    </Card.Text>

                    <Card.Text>
                      {blog.description?.substring(0, 120)}...
                    </Card.Text>

                  </Card.Body>

                  <Card.Footer>

                    <small className="text-danger">
                      Deadline: {blog.deadline}
                    </small>

                    <br />

                    <small className="text-muted">
                      Posted:{" "}
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </small>

                  </Card.Footer>

                </Card>
              </Link>
            </Col>
          ))
        ) : (
          <Col>
            <h4 className="text-center text-danger">
              No blogs found for "{decodeURIComponent(category)}"
            </h4>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CategoryBlogs;