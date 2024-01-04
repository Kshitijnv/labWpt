import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddFoodComponent from "./AddFoodComponent";
import FoodListComponent from "./FoodListComponent";

const App = () => {
  const [foods, setFoods] = useState([]);

  const addFood = (food) => {
    setFoods([...foods, food]);
  };

  return (
    <div>
      <AddFoodComponent addFood={addFood} />
      <FoodListComponent foods={foods} />
    </div>
  );
};

export default App;
