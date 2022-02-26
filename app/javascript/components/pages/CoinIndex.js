import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
export default function CoinIndex() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/coins")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <table className="table">
        <thead className="table-light">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <NavLink to={`/coins/${item.id}`} className="btn btn-primary">
                  Show
                </NavLink>
              </td>
              <td>
                <NavLink
                  to={`/coins/${item.id}/edit`}
                  className="btn btn-secondary"
                >
                  Edit
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
