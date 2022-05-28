import React from "react";
import "./HomePage.css";

export default class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <h1>SHOES!!!!!!!!!!</h1>
        <div className="content">
          <p>
            A shoe is an item of footwear intended to protect and comfort the
            human foot. Shoes are also used as an item of decoration and
            fashion. The design of shoes has varied enormously through time and
            from culture to culture, with form originally being tied to
            function. Though the human foot can adapt to varied terrains and
            climate conditions, it is still vulnerable to environmental hazards
            such as sharp rocks and temperature extremes, which shoes protect
            against. Some shoes are worn as safety equipment, such as steel-toe
            boots which are required footwear at industrial worksites.
          </p>
          <br />
          <p>
            Additionally, fashion has often dictated many design elements, such
            as whether shoes have very high heels or flat ones. Contemporary
            footwear varies widely in style, complexity and cost. Basic sandals
            may consist of only a thin sole and simple strap and be sold for a
            low cost. High fashion shoes made by famous designers may be made of
            expensive materials, use complex construction and sell for large
            sums of money. Some shoes are designed for specific purposes, such
            as boots designed specifically for mountaineering or skiing, while
            others have more generalized usage such as sneakers which have
            transformed from a special purpose sport shoe into a general use
            shoe.
          </p>
          <br />
          <p>
            Traditionally, shoes have been made from leather, wood or canvas,
            but are increasingly being made from rubber, plastics, and other
            petrochemical-derived materials. Globally, the shoe industry is a
            $200 billion a year industry. 90% of shoes end up in landfills,
            because the materials are hard to separate, recycle or otherwise
            reuse.
          </p>
        </div>
      </div>
    );
  }
}
