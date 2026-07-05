import React from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  return (
    <div className="bg-light py-5">
      <Container style={{ maxWidth: "800px" }}>

        {/* TITLE */}
        <Card className="shadow-sm p-4 border-0 rounded-3 mb-4 text-center">
          <h2 className="fw-bold mb-1">Terms & Conditions</h2>
          <p className="text-muted mb-0">Last Updated: July 2026</p>
        </Card>

        {/* INTRO */}
        <Card className="p-4 border rounded-3 mb-3 bg-white">
          <p className="mb-0">
            By using <strong>ScholarHub</strong>, you agree to these terms and conditions
          </p>
        </Card>

        {/* SECTION 1 */}
        <Card className="p-4 border rounded-3 mb-3 bg-light">
          <h5 className="fw-bold">1. Use of Website</h5>
          <p className="mb-0">
            This site is intended to provide educational and information only.
          </p>
        </Card>

        {/* SECTION 2 */}
        <Card className="p-4 border rounded-3 mb-3 bg-light">
          <h5 className="fw-bold">2. Content Accuracy</h5>
          <p className="mb-0">
           All information is made available in as accurate a manner as possible but 100% accuracy cannot be guaranteed.
          </p>
        </Card>

        {/* SECTION 3 */}
        <Card className="p-4 border rounded-3 mb-3 bg-light">
          <h5 className="fw-bold">3. External Links</h5>
          <p className="mb-0">
             We are not responsible for third-party websites linked on ScholarHub.
          </p>
        </Card>

        {/* SECTION 4 */}
        <Card className="p-4 border rounded-3 mb-3 bg-light">
          <h5 className="fw-bold">4. User Conduct</h5>
          <ul className="mb-0">
            <li>No spam or misuse of forms</li>
            <li>No hacking attempts</li>
            <li>No harmful activities</li>
          </ul>
        </Card>

        {/* SECTION 5 */}
        <Card className="p-4 border rounded-3 mb-3 bg-light">
          <h5 className="fw-bold">5. Changes</h5>
          <p className="mb-0">
           We may update these terms anytime without prior notice.
          </p>
        </Card>

        {/* CONTACT */}
        <Card className="p-4 border rounded-3 bg-white">
          <h5 className="fw-bold">6. Contact</h5>
          <p className="mb-0">
            For any questions, visit our{" "}
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

export default TermsConditions;