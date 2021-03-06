import React from 'react';

import classes from './Order.css';

const order = (props) => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingOutput = ingredients.map((ig) => {
    return (
      <span
        style={{
          textTransform: 'capitalize',
          display: 'inline-block',
          margin: ' 0 8px',
          border: '1px solid #ccc',
          padding: '5px',
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>
        name: <strong>{props.orderData.name}</strong>, email:{' '}
        <strong>{props.orderData.email}</strong>
      </p>
      <p>Ingredients: {ingOutput}</p>
      <p>
        Price <strong>{props.price} USD</strong>
      </p>
      <p>
        {props.orderData.street}, {props.orderData.country}
      </p>
    </div>
  );
};

export default order;
