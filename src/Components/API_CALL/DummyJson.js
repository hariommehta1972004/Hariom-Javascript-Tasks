import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dummyjson = () => {
    const [quotes, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("https://dummyjson.com/quotes")
            .then((res) => {
                setQuotes(res.data.quotes);
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
            {/* Home Button */}
            <div className="mb-4 text-center">
                <Link to="/" className="btn btn-primary btn-lg rounded-pill shadow">
                    Home
                </Link>
            </div>

            {/* Title */}
            <h2 className="text-center text-dark mb-5 fw-bold">
                🌟 Inspirational Quotes 🌟
            </h2>

            {/* Loading & Error Handling */}
            {loading && <h3 className="text-center text-secondary">Loading...</h3>}
            {error && <h4 className="text-danger text-center">{error}</h4>}

            {/* Display Quotes */}
            {!loading && !error && (
                <div className="row gy-4">
                    {quotes.map((quote) => (
                        <div className="col-md-4" key={quote.id}>
                            <div className="card shadow-lg rounded-lg border-0 h-100">
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <p className="fs-4 text-dark italic">{`"${quote.quote}"`}</p>
                                        <footer className="blockquote-footer text-end text-muted fs-6">
                                            {quote.author}
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dummyjson;
