import React, { useState } from "react";

const ProductForm = ({ handleProduct }) => {
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    const NewProduct = {
      name,
      price,
      quantity,
    };

    if (name.length === 0) {
      setError("Porduct Name Cannot be Empty!");
      return;
    } else if (price < 0) {
      setError("Product Price Cannot Be 0 !");
      return;
    } else if (quantity < 0) {
      setError("Product Quantity Cannot Be 0 !");
      return;
    } else {
      setError("");
    }

    handleProduct(NewProduct);

    e.target.name.value = "";
    e.target.price.value = "";
    e.target.quantity.value = "";
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" id="" />
        <br />
        <input type="text" name="price" placeholder="Product Price" id="" />
        <br />
        <input
          type="text"
          name="quantity"
          placeholder="Product Quantity"
          id=""
        />
        <br />

        <button type="submit" value="submit">
          Submit
        </button>
      </form>
      <p className="text-red-500">
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ProductForm;
