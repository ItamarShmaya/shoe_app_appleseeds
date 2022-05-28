import React from "react";

export default class Button extends React.Component {
  render() {
    const { id, type, onClick, name, className } = this.props;
    return (
      <button
        className={`btn ${className}`}
        id={id}
        type={type}
        onClick={(e) => onClick(e)}
      >
        {name}
      </button>
    );
  }
}

Button.defaultProps = {
  type: "button",
  className: null,
};
