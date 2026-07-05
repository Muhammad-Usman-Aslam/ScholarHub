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
  return decodeURIComponent(value)
    .trim()
    .toLowerCase()
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

const getCategoryVariants = (value = "") => {
  const normalized = normalizeCategory(value);
  const variants = new Set([normalized]);

  if (normalized.endsWith("s") && normalized.length > 3) {
    variants.add(normalized.slice(0, -1));
  }

  return [...variants].filter(Boolean);
};

const formatCategoryTitle = (value = "") => {
  return decodeURIComponent(value)
    .trim()
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const CategoryBlogs = () => {
  const { category } = useParams();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get("https://scholarhub-backend.vercel.app/api/getblogs");

        const selectedCategory = normalizeCategory(category);

        const filteredBlogs = res.data.filter((blog) => {
          if (!blog.category) return false;

          const blogVariants = getCategoryVariants(blog.category);
          const selectedVariants = getCategoryVariants(selectedCategory);

          return selectedVariants.some((variant) => blogVariants.includes(variant));
        });

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
      <h2 className="text-primary mb-5">
        {formatCategoryTitle(category)}
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
                    src={`https://scholarhub-backend.vercel.app/api/img/${blog._id}`}
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
              No blogs found for "{formatCategoryTitle(category)}"
            </h4>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default CategoryBlogs;