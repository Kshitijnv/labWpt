import React, { useState } from "react";

const AddFoodComponent = ({ addFood }) => {
  const [food, setFood] = useState({
    foodId: "",
    foodName: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFood((prevFood) => ({ ...prevFood, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFood(food);
    setFood({
      foodId: "",
      foodName: "",
      price: "",
    });
  };

  return (
    <div className="container mt-4">
      <h2>Add Food</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="foodId" className="form-label">
            Food ID
          </label>
          <input
            type="text"
            className="form-control"
            id="foodId"
            name="foodId"
            value={food.foodId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="foodName" className="form-label">
            Food Name
          </label>
          <input
            type="text"
            className="form-control"
            id="foodName"
            name="foodName"
            value={food.foodName}
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
            value={food.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFoodComponent;
