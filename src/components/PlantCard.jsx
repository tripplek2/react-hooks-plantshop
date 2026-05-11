import React from "react";

function PlantCard({ plant, onSoldOut }) {
  return (
    <li className="card" data-testid="plant-item">
      {/* plant image */}
      <img src={plant.image} alt={plant.name} />

      {/* plant name */}
      <h4>{plant.name}</h4>

      {/* price */}
      <p>Price: {plant.price}</p>

      
      <button className="primary" onClick={() => onSoldOut(plant.id)}>{plant.inStock ? "In Stock" : "Sold Out"}</button>
      
    </li>
  );
}

export default PlantCard;
