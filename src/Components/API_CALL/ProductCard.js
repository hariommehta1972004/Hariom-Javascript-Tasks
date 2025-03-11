import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Badge, ListGroup, Container, Row, Col, Spinner } from "react-bootstrap";
import { FaStar } from "react-icons/fa"; // Star icon for reviews

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <Card className="shadow-lg border-0 rounded-3 mb-4 hover-shadow-lg">
      <Card.Img
        variant="top"
        src={product.thumbnail || "https://via.placeholder.com/300"}
        alt={product.title || "Product Image"}
        className="rounded-top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="fw-bold text-dark">{product.title}</Card.Title>
        <Card.Text className="text-muted">{product.description}</Card.Text>
        <h5 className="d-flex justify-content-between align-items-center">
          <Badge bg="primary" className="fs-5">${product.price}</Badge>
          {product.discountPercentage && (
            <Badge bg="success" className="fs-6">-{product.discountPercentage}%</Badge>
          )}
        </h5>
        <p className="mb-2">
          <strong>Category:</strong> {product.category || "N/A"}
        </p>
        <p className="mb-2">
          <strong>Brand:</strong> {product.brand || "Unknown"}
        </p>
        <p>
          <strong>Stock:</strong>{" "}
          {product.stock > 0 ? (
            <Badge bg="success">In Stock</Badge>
          ) : (
            <Badge bg="danger">Out of Stock</Badge>
          )}
        </p>

        <Button variant="primary" className="w-100 mt-2">
          Buy Now
        </Button>
      </Card.Body>

      <Card.Footer className="bg-light p-3">
        <h6 className="mb-3">Customer Reviews</h6>
        {product.reviews && product.reviews.length > 0 ? (
          <ListGroup variant="flush">
            {product.reviews.map((review, index) => (
              <ListGroup.Item key={index} className="small">
                <div className="d-flex justify-content-between">
                  <strong>{review.reviewerName}</strong>
                  <div>
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        color={i < review.rating ? "#f39c12" : "#bdc3c7"}
                        size={14}
                      />
                    ))}
                    <span className="ms-2">({review.rating} ★)</span>
                  </div>
                </div>
                <p className="mb-1">{review.comment}</p>
                <small className="text-muted">
                  {new Date(review.date).toLocaleDateString()}
                </small>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <p className="text-muted small">No reviews yet.</p>
        )}
      </Card.Footer>
    </Card>
  );
};

const APICall6 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Fetch Error:", err);
        setError("Failed to fetch data. Please try again.");
        setLoading(false);
      });
  }, []);

  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-between mb-4">
        <h2 className="text-center">Product List</h2>
        <Link to="/" className="btn btn-dark">
          Home
        </Link>
      </div>

      {loading && <Spinner animation="border" className="d-block mx-auto" variant="primary" />}
      {error && <h4 className="text-danger text-center">{error}</h4>}

      {!loading && !error && (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default APICall6;
