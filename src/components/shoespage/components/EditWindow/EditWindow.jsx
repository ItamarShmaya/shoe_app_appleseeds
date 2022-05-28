import React from "react";
import "./EditWindow.css";
import {
  getShoesData,
  updateShoeData,
  deleteShoeData,
} from "../../../../apis/mockapi/api_requests";
import InputField from "../../../utils/InputField";
import Button from "../../../utils/Button";

export default class EditWindow extends React.Component {
  state = {
    nameInput: this.props.shoeData.name,
    priceInput: this.props.shoeData.price.replaceAll(",", ""),
    imageUrlInput: this.props.shoeData.image,
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  onUpdateButtonClick = async (e) => {
    const { nameInput, priceInput, imageUrlInput } = this.state;
    const { type, shoeData } = this.props;

    e.preventDefault();

    const newShoeData = {
      name: nameInput,
      price: (+priceInput).toLocaleString(),
      image: imageUrlInput,
    };

    await updateShoeData(type, shoeData.id, newShoeData);
    const shoesData = await getShoesData(type);
    this.props.setEditModeToFalseAndGetNewShoesData(shoesData);
  };

  onDeleteButtonClick = async () => {
    const { type, shoeData } = this.props;
    await deleteShoeData(type, shoeData.id);
    const shoesData = await getShoesData(this.props.type);
    this.props.setEditModeToFalseAndGetNewShoesData(shoesData);
  };

  render() {
    const { nameInput, priceInput, imageUrlInput } = this.state;

    return (
      <div
        id="editWindowWrapper"
        className="edit-window-wrapper"
        onClick={this.props.onCancelButtonClick}
      >
        <div
          id="editWindowContainer"
          className="edit-window-container"
          onClick={this.props.onCancelButtonClick}
        >
          <div className="edit-window">
            <form className="edit-form">
              <h2>Edit</h2>
              <InputField
                id="product-name"
                label="Name"
                name="nameInput"
                type="text"
                value={nameInput}
                onChange={this.onInputChange}
              />
              <InputField
                id="product-price"
                label="Price"
                name="priceInput"
                type="number"
                value={priceInput}
                onChange={this.onInputChange}
              />
              <InputField
                id="image-url"
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
                  value="Update"
                  onClick={this.onUpdateButtonClick}
                />
                <Button
                  id="cancelButton"
                  name="Cancel"
                  onClick={this.props.onCancelButtonClick}
                />
                <Button name="Delete" onClick={this.onDeleteButtonClick} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
