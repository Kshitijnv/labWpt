import React from "react";

const FoodListComponent = ({ foods }) => {
  return (
    <div className="container mt-4">
      <h2>Food List</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Food ID</th>
            <th scope="col">Food Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food, index) => (
            <tr key={index}>
              <td>{food.foodId}</td>
              <td>{food.foodName}</td>
              <td>${food.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodListComponent;
