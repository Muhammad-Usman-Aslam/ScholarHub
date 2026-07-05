import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Spinner, Badge } from "react-bootstrap";

const CountryBlogs = () => {
  const { country } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("https://scholarhub-backend.vercel.app/api/getblogs");

        console.log("URL country:", country);
        console.log("All blogs:", res.data);

        const filtered = res.data.filter((item) => {
          const blogCountry = (item.country || "")
            .toString()
            .trim()
            .toLowerCase();

          const paramCountry = (country || "")
            .toString()
            .trim()
            .toLowerCase();

          return blogCountry === paramCountry;
        });

        console.log("Filtered blogs:", filtered);

        setBlogs(filtered);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [country]);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Container className="my-5">
      <h2 className="mb-4 text-primary">
        {country} Scholarships
      </h2>

      {blogs.length === 0 ? (
        <p className="text-danger">No blogs found for this country.</p>
      ) : (
        <Row>
          {blogs.map((blog) => (
            <Col lg={4} md={6} key={blog._id}>
              <Link
                to={`/blog/${blog._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card className="mb-4 shadow-sm">
                  <Card.Img
                    src={`https://scholarhub-backend.vercel.app/api/img/${blog._id}`}
                    style={{ height: 220, objectFit: "cover" }}
                  />

                  <Card.Body>
                    <Badge bg="success" className="mb-2">
                      {blog.category}
                    </Badge>

                    <Card.Title>{blog.title}</Card.Title>

                    <Card.Text>
                      <strong>{blog.city ? "City" : "Country"}:</strong>{" "}
                      {blog.city || blog.country}
                    </Card.Text>

                    <Card.Text className="text-danger">
                      <strong>Deadline:</strong> {blog.deadline}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default CountryBlogs;