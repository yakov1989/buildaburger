import React from "react";
import "./Order.css";
const order = props => {
  const ingredients = [];

  for (let ingredientsName in props.ingredients) {
    //export ingredients into an array by name and amount
    ingredients.push({
      name: ingredientsName,
      amount: props.ingredients[ingredientsName]
    });
  }

  const ingredientOutpot = ingredients.map(ig => {
    return (
      <span className="Span" key={ig.name}>
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className="Order">
      <p>Ingredients:{ingredientOutpot}</p>
      <p>
        Price: <strong> {props.price} USD </strong>
      </p>
    </div>
  );
};

export default order;
