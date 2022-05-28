import React from "react";
import "./AddShoe.css";
import {
  getShoesData,
  createShoeEntry,
} from "../../../../apis/mockapi/api_requests";
import InputField from "../../../utils/InputField";
import Button from "../../../utils/Button";

export default class AddShoe extends React.Component {
  state = {
    nameInput: "",
    priceInput: "",
    imageUrlInput: "",
    submitted: false,
  };

  componentDidUpdate = () => {
    const { nameInput, priceInput, imageUrlInput, submitted } = this.state;
    if (
      submitted &&
      (nameInput === "" || priceInput === "" || imageUrlInput === "")
    ) {
      this.setState({ submitted: false });
    } else if (
      !submitted &&
      !(nameInput === "" || priceInput === "" || imageUrlInput === "")
    ) {
      this.setState({ submitted: true });
    }
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onFormSubmit = async (e) => {
    this.resetFields();
    this.setState({ submitted: false });
    const { nameInput, priceInput, imageUrlInput } = this.state;
    e.preventDefault();
    const shoeData = {
      name: nameInput,
      price: (+priceInput).toLocaleString(),
      image: imageUrlInput,
    };

    await createShoeEntry(this.props.type, shoeData);
    const shoesData = await getShoesData(this.props.type);
    this.props.setEditModeToFalseAndGetNewShoesData(shoesData);
  };

  resetFields = () => {
    this.setState({
      nameInput: "",
      priceInput: "",
      imageUrlInput: "",
      submitted: true,
    });
  };

  onClearButtonClick = () => {
    this.resetFields();
  };

  render() {
    const { nameInput, priceInput, imageUrlInput } = this.state;
    return (
      <div className="addshoe-form-container">
        <form className="addshoe-form" onSubmit={this.onFormSubmit}>
          <InputField
            id="nameInput"
            label="Name"
            name="nameInput"
            type="text"
            value={nameInput}
            onChange={this.onInputChange}
          />
          <InputField
            id="priceInput"
            label="Price"
            name="priceInput"
            type="number"
            value={priceInput}
            onChange={this.onInputChange}
          />
          <InputField
            id="imageUrlInput"
            label="Image URL"
            name="imageUrlInput"
            type="text"
            value={imageUrlInput}
            onChange={this.onInputChange}
          />
          <div className="button-group">
            <input
              className="btn"
              type="submit"
              value="Add"
              disabled={!this.state.submitted}
            />
            <Button onClick={this.onClearButtonClick} name="Clear" />
          </div>
        </form>
      </div>
    );
  }
}
