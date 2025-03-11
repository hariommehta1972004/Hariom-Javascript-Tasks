import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://gorest.co.in/public/v2/users")
      .then((res) => {
        setUsers(res.data);
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
        <h2 className="text-primary fw-bold">👥 User List</h2>
        <Link to="/" className="btn btn-dark rounded-pill px-4">🏠 Home</Link>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status"></div>
          <h4 className="mt-3 text-muted">Fetching users...</h4>
        </div>
      )}

      {/* Error Handling */}
      {error && (
        <div className="alert alert-danger text-center">{error}</div>
      )}

      {/* Display Users */}
      {!loading && !error && (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {users.map((user) => (
            <div key={user.id} className="col">
              <div className="card h-100 shadow-lg rounded overflow-hidden">
                {/* User Avatar */}
                <div className="position-relative">
                  <img
                    src={`https://i.pravatar.cc/150?img=${user.id}`}
                    alt={user.name}
                    className="card-img-top rounded-circle mx-auto my-3"
                    style={{
                      height: "100px",
                      width: "100px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Card Body */}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-primary fw-bold">{user.name}</h5>
                  <p className="card-text text-muted">{user.email}</p>
                  <p className="card-text text-muted">
                    <strong>Gender:</strong> {user.gender}
                  </p>

                  {/* User Status */}
                  <span
                    className={`badge ${user.status === "active" ? "bg-success" : "bg-danger"} text-white`}
                  >
                    {user.status}
                  </span>
                </div>

                {/* Card Footer */}
                <div className="card-footer bg-white border-0 d-flex justify-content-center p-3">
                  <Link
                    to={`/user/${user.id}`}
                    className="btn btn-outline-primary btn-sm fw-bold"
                  >
                    🔍 View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewUser;
