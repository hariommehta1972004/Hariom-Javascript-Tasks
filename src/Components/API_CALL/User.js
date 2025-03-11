import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col, Spinner, Badge, Alert } from "react-bootstrap";

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUsers(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Fetch Error:", err);
        setError("Failed to fetch data. Please try again.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-4">
        <h2>User List</h2>
        <Link to="/" className="btn btn-dark">
          Home
        </Link>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {/* Error Handling */}
      {error && <Alert variant="danger" className="text-center">{error}</Alert>}

      {/* Users Grid */}
      {!loading && !error && (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {users.map((user) => (
            <Col key={user.id}>
              <Card className="shadow-sm border-0 h-100 hover-shadow">
                <Card.Img
                  variant="top"
                  src={user.avatar}
                  alt={`${user.first_name} ${user.last_name}`}
                  className="rounded-circle mx-auto mt-3"
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    {user.first_name} {user.last_name}
                  </Card.Title>
                  <Card.Text className="text-center text-muted">
                    <Badge bg="primary">{user.email}</Badge>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-light text-center">
                  <small className="text-muted">User ID: {user.id}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default User;
