import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients).map(
    (eachKey) => {
      return [...Array(props.ingredients[eachKey])].map((_, index) => {
        return <BurgerIngredient key={eachKey + index} type={eachKey} />;
      });
    }
  );

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
