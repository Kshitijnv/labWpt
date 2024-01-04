import React, { useState } from "react";

export default function AddProductComponent(props) {
  const [product, setProduct] = useState({
    productId: "",
    productName: "",
    price: "",
    expiryDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addProduct(product);
    setProduct({
      productId: "",
      productName: "",
      price: "",
      expiryDate: "",
    });
  };
  return (
    <div className="container mt-4">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="productId" className="form-label">
            Product Id
          </label>
          <input
            type="text"
            className="form-control"
            id="productId"
            name="productId"
            value={product.productId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            name="productName"
            value={product.productName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="expiryDate" className="form-label">
            Expiry Date
          </label>
          <input
            type="date"
            className="form-control"
            id="expiryDate"
            name="expiryDate"
            value={product.expiryDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
}
