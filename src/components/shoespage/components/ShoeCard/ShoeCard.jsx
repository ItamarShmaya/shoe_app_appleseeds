import React from "react";
import "./ShoeCard.css";

export default class ShoeCard extends React.Component {
  onCardClick = () => {
    this.props.onCardClick(this.props.shoeData);
  };

  render() {
    const { name, image, price } = this.props.shoeData;
    return (
      <div className="shoe-card" onClick={this.onCardClick}>
        <div className="shoe-image">
          <img alt={name} src={image} />
        </div>
        <div className="shoe-name">{name}</div>
        <div className="shoe-price">${price}</div>
      </div>
    );
  }
}
