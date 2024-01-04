import React from "react";
export default function ProductListComponent(props) {
  console.log(props.products);
  return (
    <div className="container mt-4">
      <h2>Product List</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product Id</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product, index) => (
            <tr key={index}>
              <td>{product.productId}</td>
              <td>{product.productName}</td>
              <td>Rs.{product.price}</td>
              <td>{product.expiryDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
