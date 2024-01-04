import "./App.css";
import AddProductComponent from "./components/AddProductComponent";
import ProductListComponent from "./components/ProductListComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  // const [myProduct, setProducts] = useState([
  //   { pId: 1, pName: "product1", pPrice: 100, pExpiryDate: "2024-05-01" },
  //   { pId: 2, pName: "product2", pPrice: 200, pExpiryDate: "2024-05-02" },
  //   { pId: 3, pName: "product3", pPrice: 300, pExpiryDate: "2024-05-03" },
  // ]);
  // const addProduct = (product) => {
  //   setProducts([...myProduct, product]);
  // };
  // console.log(myProduct);
  // return (
  //   <div className="App">
  //     <AddProductComponent addProduct={addProduct} />
  //     <ProductListComponent products={myProduct} />
  //   </div>
  // );
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div>
      <AddProductComponent addProduct={addProduct} />
      <ProductListComponent products={products} />
    </div>
  );
}

export default App;
