import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Details = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
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
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-light fw-bold">User Details</h2>
        <Link to="/" className="btn btn-outline-light rounded-circle p-3">
          <FaHome size={20} />
        </Link>
      </div>

      {loading && (
        <div className="text-center text-light">
          <h3>Loading...</h3>
        </div>
      )}

      {error && (
        <div className="alert alert-danger text-center">{error}</div>
      )}

      {!loading && !error && (
        <div className="row">
          {users.map((user) => (
            <div className="col-md-4 mb-4" key={user.id}>
              <div className="card shadow-lg rounded-lg">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text"><strong>Username:</strong> {user.username}</p>
                  <p className="card-text"><strong>Email:</strong> {user.email}</p>
                  <p className="card-text">
                    <strong>Phone:</strong> {user.phone}
                  </p>
                  <p className="card-text">
                    <strong>Website:</strong>
                    <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
                      {user.website}
                    </a>
                  </p>
                </div>
                <div className="card-footer bg-light">
                  <div className="d-flex justify-content-between">
                    <div className="border p-2 rounded">
                      <strong>Address:</strong>
                      <ul>
                        <li><strong>Street:</strong> {user.address.street}</li>
                        <li><strong>City:</strong> {user.address.city}</li>
                        <li><strong>Zipcode:</strong> {user.address.zipcode}</li>
                      </ul>
                    </div>
                    <div className="border p-2 rounded">
                      <strong>Company:</strong>
                      <p>{user.company.name}</p>
                      <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Details;
