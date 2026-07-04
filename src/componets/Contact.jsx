import React, { useState } from "react";
import axios from "axios";
import {Container,Row,Col,Form,Button,Card,Alert,Spinner,} from "react-bootstrap";
import { FaMapMarkerAlt,FaPhoneAlt,FaEnvelope,FaClock} from "react-icons/fa";
import contactImage from "../assets/contact1.jpg";
const Contact = () => {
  const [form, setForm] = useState({name: "",email: "",subject: "",message: ""});

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({...form,[e.target.name]: e.target.value,});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
setLoading(true);
    setSuccess("");
    setError("");

    try {
      const { data } = await axios.post("https://scholarhub-backend.vercel.app/api/contact",form);

      setSuccess(data.message || "Message submitted successfully!");
setForm({name: "",email: "",subject: "",message: "",});
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="text-white d-flex align-items-center"
        style={{
  height: "300px",
  backgroundImage: `linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)), url(${contactImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}}
      >
        <Container className="text-center">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead">
            We'd love to hear from you. Send us your message.
          </p>
        </Container>
      </div>

      {/* Contact Section */}
      <Container className="py-5">
        <Row className="g-4">
          <Col lg={4}>
            <Card className="shadow border-0 h-100">
              <Card.Body>
                <h3 className="mb-4">Get In Touch</h3>

                <div className="mb-4">
                  <FaMapMarkerAlt className="text-primary me-2" />
                  <strong>Address</strong>
                  <p className="text-muted mb-0">
                    Lahore, Punjab, Pakistan
                  </p>
                </div>

                <div className="mb-4">
                  <FaPhoneAlt className="text-success me-2" />
                  <strong>Phone</strong>
                  <p className="text-muted mb-0">
                    +92 3099229243
                  </p>
                </div>

                <div className="mb-4">
                  <FaEnvelope className="text-danger me-2" />
                  <strong>Email</strong>
                  <p className="text-muted mb-0">
                  muhammadusmanaslam76@gmail.com
                  </p>
                </div>

                <div>
                  <FaClock className="text-warning me-2" />
                  <strong>Working Hours</strong>
                  <p className="text-muted mb-0">
                    Monday - Friday
                  </p>
                  <p className="text-muted">
                    09:00 AM - 06:00 PM
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={8}>
            <Card className="shadow border-0">
              <Card.Body className="p-4">
                <h2 className="mb-4">Send us a Message</h2>

                {success && <Alert variant="success">{success}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}

  <Form onSubmit={handleSubmit}>
  <Row>
<Col md={6}>
  <Form.Group className="mb-3">
<Form.Label>Full Name</Form.Label>
<Form.Control type="text" name="name"value={form.name}
 onChange={handleChange} placeholder="Enter your full name"
       required/>
       </Form.Group></Col>

  <Col md={6}>
  <Form.Group className="mb-3">
  <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" name="email" value={form.email} onChange={handleChange}
placeholder="Enter your email" required/>
</Form.Group> </Col> </Row>

<Form.Group className="mb-3">
<Form.Label>Subject</Form.Label>
 <Form.Control type="text" name="subject" value={form.subject} onChange={handleChange}
placeholder="Enter subject" required/>
</Form.Group>

<Form.Group className="mb-4">
<Form.Label>Message</Form.Label>
<Form.Control as="textarea" rows={6} name="message" value={form.message}
onChange={handleChange} placeholder="Write your message..." required/>
</Form.Group>

  <Button type="submit" variant="primary"size="lg" disabled={loading}>
  {loading ? (
 <>
 <Spinner animation="border" size="sm"className="me-2"/>Sending...</>
  ) : ("Send Message")}</Button>
  </Form>
   </Card.Body>
      </Card>
   </Col>
   </Row>

        {/* Google Map */}
        <Row className="mt-5">
          <Col>
            <Card className="shadow border-0">
              <Card.Body className="p-0">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;