import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((eachKey) => {
      return [...Array(props.ingredients[eachKey])].map((_, index) => {
        return <BurgerIngredient key={eachKey + index} type={eachKey} />;
      });
    })
    .reduce((prevArr, nextEl) => {
      return prevArr.concat(nextEl);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  console.log(transformedIngredients);

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
