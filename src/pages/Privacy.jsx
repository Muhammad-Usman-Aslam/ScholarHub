import React from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="bg-light py-5">
      <Container style={{ maxWidth: "800px" }}>

        {/* MAIN TITLE */}
        <Card className="shadow-sm p-4 border-0 rounded-3 mb-4 text-center">
          <h2 className="fw-bold mb-1">Privacy Policy</h2>
          <p className="text-muted mb-0">Last Updated: July 2026</p>
        </Card>

        {/* INTRO */}
        <Card className="p-4 border rounded-3 mb-3 bg-white">
          <p className="mb-0">
            At <strong>ScholarHub</strong>, We value your privacy, and take great care to protect your personal information.
          </p>
        </Card>

        {/* SECTION 1 */}
        <Card className="p-4 border rounded-3 mb-3 bg-light">
          <h5 className="fw-bold">1. Information We Collect</h5>
          <ul className="mb-0">
            <li>Email address (newsletter subscription)</li>
            <li>Contact form data</li>
            <li>Website usage data (cookies, analytics)</li>
          </ul>
        </Card>

        {/* SECTION 2 */}
        <Card className="p-4 border rounded-3 mb-3 bg-light">
          <h5 className="fw-bold">2. How We Use Information</h5>
          <ul className="mb-0">
            <li>Send updates about scholarships and jobs</li>
            <li>Improve website performance</li>
            <li>Respond to user inquiries</li>
          </ul>
        </Card>

        {/* SECTION 3 */}
        <Card className="p-4 border rounded-3 mb-3 bg-light">
          <h5 className="fw-bold">3. Data Protection</h5>
          <p className="mb-0">
           We never sell or share your personal information with anyone else. Your information is securely stored.
          </p>
        </Card>

        {/* SECTION 4 */}
        <Card className="p-4 border rounded-3 mb-3 bg-light">
          <h5 className="fw-bold">4. Cookies</h5>
          <p className="mb-0">
           Cookies are used to enhance the user experience. They can be turned off in the browser settings.
          </p>
        </Card>

        {/* CONTACT */}
        <Card className="p-4 border rounded-3 bg-white">
          <h5 className="fw-bold">5. Contact</h5>
          <p className="mb-0">
            Visit our{" "}
            <Link to="/contact">Contact Page</Link>{" "}
            or email us at{" "}
            <a href="mailto:muhammadusmanaslam76@gmail.com">
              muhammadusmanaslam76@gmail.com
            </a>
          </p>
        </Card>

      </Container>
    </div>
  );
};

export default PrivacyPolicy;