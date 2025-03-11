import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://api.escuelajs.co/api/v1/products")
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
            {/* Header Section */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-primary fw-bold">🛍️ Explore Our Products</h2>
                <Link to="/" className="btn btn-dark rounded-pill px-4">🏠 Home</Link>
            </div>

            {/* Loading Spinner */}
            {loading && (
                <div className="text-center my-5">
                    <div className="spinner-border text-primary" role="status"></div>
                    <h4 className="mt-3 text-muted">Fetching products...</h4>
                </div>
            )}

            {/* Error Handling */}
            {error && <div className="alert alert-danger text-center">{error}</div>}

            {/* Product Cards */}
            {!loading && !error && (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {products.map((product) => (
                        <div key={product.id} className="col">
                            <div className="card h-100 border-0 shadow-lg rounded-lg overflow-hidden position-relative hover-shadow">
                                {/* Product Image and Category Badge */}
                                <div className="position-relative">
                                    <img
                                        src={product.images[0]}
                                        alt={product.title}
                                        className="card-img-top"
                                        style={{ height: "250px", objectFit: "cover" }}
                                    />
                                    <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2 px-3 py-1 rounded-pill">
                                        {product.category.name}
                                    </span>
                                </div>

                                {/* Product Body */}
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title text-primary fw-bold">{product.title}</h5>
                                    <h6 className="text-success fw-bold fs-5">${product.price.toFixed(2)}</h6>

                                    <p className="card-text text-muted small text-truncate" title={product.description}>
                                        {product.description}
                                    </p>

                                    {/* Rating */}
                                    {product.rating && (
                                        <div className="d-flex align-items-center mt-auto">
                                            <span className="text-warning me-2">
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <i
                                                        key={index}
                                                        className={`bi bi-star${index < product.rating ? '-fill' : ''}`}
                                                    ></i>
                                                ))}
                                            </span>
                                            <small className="text-muted">{product.rating} / 5</small>
                                        </div>
                                    )}
                                </div>

                                {/* Product Actions */}
                                <div className="card-footer bg-white border-0 d-flex justify-content-between p-3">
                                    <Link
                                        to={`/product/${product.id}`}
                                        className="btn btn-outline-primary btn-sm fw-bold"
                                    >
                                        🔍 View Details
                                    </Link>
                                    <button className="btn btn-success btn-sm fw-bold text-white">
                                        🛒 Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ViewProduct;
