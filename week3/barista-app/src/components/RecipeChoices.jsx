import React, { Component, useEffect, useState } from "react";

const RecipeChoices = ({ handleChange, label, choices, checked }) => {
    return (
      <div>
        <div className="radio-buttons">
            {/* mapping the choices in ingredients */}
            {choices &&
                choices.map((choice) => ( // multiple blocks of this bc of .map()
                <li key={choice}>
                    <input
                    id={choice}
                    value={choice}
                    name={label}
                    type="radio"
                    onChange={handleChange} // changes on click and updates e.target.name: e.target.value
                    checked={checked == choice} // unchecks if it does not match (e.g. next drink, new drink)
                    />
                    {choice}
                </li>
                ))}
            </div>
      </div>
    );
};

export default RecipeChoices;
