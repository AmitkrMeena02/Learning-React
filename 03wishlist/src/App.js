import React, { useState, useEffect } from "react";

function App() {
  const [productId, setProductId] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [products, setProducts] = useState([]);

  useEffect(() => {
      const storedProducts = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!isNaN(key)) {
          const product = JSON.parse(localStorage.getItem(key));
          storedProducts.push(product);
        }
      }
      setProducts(storedProducts);
    }, []);
    

  const submitHandler = (e) => {
    e.preventDefault();

    if (productId && sellingPrice && productName && category) {
      const newProduct = {
        productId,
        sellingPrice,
        productName,
        category,
      };
      setProducts([...products, newProduct]);
      localStorage.setItem(productId, JSON.stringify(newProduct));
      setProductId("");
      setSellingPrice("");
      setProductName("");
      setCategory("Electronics");
    }
  };

  const deleteHandler = (id) => {
    const newProducts = products.filter((product) => product.productId !== id);
    setProducts(newProducts);
    localStorage.removeItem(id);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="productId">
          Product ID:
          <input
            type="text"
            id="productId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </label>
        <label htmlFor="sellingPrice">
          Selling Price:
          <input
            type="number"
            id="sellingPrice"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
          />
        </label>
        <label htmlFor="productName">
          Product Name:
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
        <label htmlFor="category">Choose a Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Electronics">Electronics</option>
          <option value="Food">Food</option>
          <option value="Skincare">Skincare</option>
        </select>
        <button type="submit">Add Product</button>
      </form>

      <h1>Products</h1>

      <h1>Electronics Items</h1>
      <ul>
        {products
          .filter((product) => product.category === "Electronics")
          .map((product, index) => (
            <li key={index}>
              ${product.sellingPrice} - {product.category} - {product.productName}
              <button
              onClick={() => deleteHandler(product.productId)}
              style={{margin: "10px"}}
              >Delete</button>
            </li>
          ))}
      </ul>

      <h1>Food Items</h1>
      <ul>
        {products
          .filter((product) => product.category === "Food")
          .map((product, index) => (
            <li key={index}>
              ${product.sellingPrice} - {product.category} - {product.productName}
              <button
              onClick={() => deleteHandler(product.productId)}
              style={{margin: "10px"}}
              >Delete</button>
            </li>
          ))}
      </ul>

      <h1>Skincare Items</h1>
      <ul>
        {products
          .filter((product) => product.category === "Skincare")
          .map((product, index) => (
            <li key={index}>
              ${product.sellingPrice} - {product.category} - {product.productName}
              <button
              onClick={() => deleteHandler(product.productId)}
              style={{margin: "10px"}}
              >Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
