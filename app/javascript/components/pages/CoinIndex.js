import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function CoinIndex() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
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
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image}
                style={{ height: 20, margin: "auto" }}
                ></img>
              </td>
              <td>{item.name}</td>
              <td>${item.current_price.toLocaleString()}</td>
              <td>
                <Link
                  to={{ pathname: `/coins/${item.id}`, state: { coin: item } }}
                  className="btn btn-primary"
                >
                  More Info
                </Link>
              </td>
              <td>
                <Link
                  to={{
                    pathname: `/coins/${item.id}/edit`,
                    state: { coin: item },
                  }}
                  className="btn btn-secondary"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
