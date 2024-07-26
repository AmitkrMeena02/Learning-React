import React, { useState } from "react";

function App() {
  const [vegs, setVegs] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (name && price && quantity) {
      const newVegs = { name, price, quantity };
      setVegs([...vegs, newVegs]);
      setName("");
      setPrice("");
      setQuantity("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  //buyHandler is not available for now
  const buyHandler = (index) => {
  };

  const deleteHandler = (index) => {
    const newVeg = vegs.filter((_, i) => i !== index);
    setVegs(newVeg);
  };

  const calculateVeg = () => {
    return vegs.length;
  };


  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>VEG SHOP</h1>
      </div>
      <form onSubmit={submitHandler}>
        <p>
          <label>
            Name:
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Price:
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Quantity:
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </label>
        </p>
        <button type="submit">ADD TO SHOP</button>
      </form>

      <ul>
        {vegs.map((veg, index) => (
          <li key={index}>
            {veg.name} - Rs{veg.price} - {veg.quantity}Kg

            <input
            type="number"
            onChange={() => buyHandler(index)}
          />
            <button
              style={{ margin: "20px" }}
            >Buy
            </button>
            
            <button
              onClick={() => deleteHandler(index)}
              style={{ margin: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h1>Total: {calculateVeg()}</h1>
    </div>
  );
}

export default App;
