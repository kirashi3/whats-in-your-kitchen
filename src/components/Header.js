import React from 'react';
import AddIngredient from './AddIngredient';
import IngredientsList from './IngredientsList';
import fridgeIcon from './../images/fridge.svg';

const Header = () => {
  return (
    <header className="header">
      <div>
        <img
          className="h-32 w-32 m-auto mb-4"
          src={fridgeIcon}
          alt="Fridge Icon"
        />
        <h1 className="text-white text-4xl leading-none text-center font-semibold mb-8 h-">
          What's in your kitchen?
        </h1>
        <AddIngredient />
        <IngredientsList />
      </div>
    </header>
  );
};

export default Header;
