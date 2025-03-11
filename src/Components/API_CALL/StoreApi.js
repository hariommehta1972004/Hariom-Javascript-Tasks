import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Badge, Row, Col, Spinner, Alert } from "react-bootstrap";

const StoreApi = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => {
                setProducts(res.data);
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
                <h2>Store Products</h2>
                <Link to="/" className="btn btn-dark">
                    Home
                </Link>
            </div>

            {loading && (
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" variant="primary" />
                </div>
            )}

            {error && (
                <Alert variant="danger" className="text-center">
                    {error}
                </Alert>
            )}

            {!loading && !error && (
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {products.map((product) => (
                        <Col key={product.id}>
                            <Card className="shadow-lg border-0 rounded-3 hover-shadow">
                                <Card.Img
                                    variant="top"
                                    src={product.image}
                                    alt={product.title}
                                    className="card-img-top"
                                    style={{
                                        height: "200px",
                                        objectFit: "cover",
                                        borderTopLeftRadius: "0.375rem",
                                        borderTopRightRadius: "0.375rem",
                                    }}
                                />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text className="text-muted">
                                        {product.description.length > 100
                                            ? `${product.description.substring(0, 100)}...`
                                            : product.description}
                                    </Card.Text>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Badge bg="primary" className="fs-5">
                                            ${product.price.toFixed(2)}
                                        </Badge>
                                        <Button variant="outline-primary" size="sm">
                                            View Product
                                        </Button>
                                    </div>
                                    <div className="mt-2 text-center">
                                        <Badge bg="secondary">{product.category}</Badge>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="bg-light text-center">
                                    <strong>{product.rating.rate} ★</strong>
                                    <br />
                                    <small>{product.rating.count} reviews</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
};

export default StoreApi;
