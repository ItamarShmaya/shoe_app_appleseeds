import React from "react";

export default class InputField extends React.Component {
  render() {
    const { id, label, name, type, value, onChange } = this.props;
    return (
      <div className="input-group">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e)}
        />
      </div>
    );
  }
}

InputField.defaultProps = {
  type: "text",
};
