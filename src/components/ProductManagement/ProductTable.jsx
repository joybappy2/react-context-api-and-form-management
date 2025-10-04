import React from "react";

const ProductTable = ({ products }) => {
  return (
    <div>
      <h2>Total Products: {products.length}</h2>
      <table>
        <thead>
          <tr>
            <th>SL</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
