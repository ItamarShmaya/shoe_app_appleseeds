import React from "react";
import "./BrandPage.css";
import { getShoesData } from "../../../../apis/mockapi/api_requests.js";
import ShoeCard from "../ShoeCard/ShoeCard";
import EditWindow from "../EditWindow/EditWindow";
import AddShoe from "../AddShoe/AddShoe";
import Spinner from "../../../Spinner/Spinner.jsx";
import { Redirect } from "react-router-dom";

export default class BrandPage extends React.Component {
  state = {
    type: "",
    shoesData: [],
    editMode: false,
    currentShoe: {},
    error: null,
  };

  componentDidMount = async () => {
    const { params } = this.props.match;
    let type = params.brand;
    try {
      const shoesData = await getShoesData(type);
      this.setState({ shoesData, type });
    } catch (error) {
      this.setState({ error });
    }
  };

  renderShoes = () => {
    return this.state.shoesData.map((shoeData) => {
      return (
        <ShoeCard
          key={shoeData.id}
          shoeData={shoeData}
          onCardClick={this.onCardClick}
        />
      );
    });
  };

  onCardClick = (shoeData) => {
    this.setState({ editMode: true, currentShoe: shoeData });
  };

  onCancelButtonClick = ({ target: { id } }) => {
    if (
      id !== "editWindowWrapper" &&
      id !== "cancelButton" &&
      id !== "editWindowContainer"
    )
      return;
    this.setState({ editMode: false });
  };

  setEditModeToFalseAndGetNewShoesData = (shoesData) => {
    this.setState({ shoesData, editMode: false });
  };

  render() {
    return (
      <>
        {this.state.editMode && (
          <EditWindow
            type={this.state.type}
            shoeData={this.state.currentShoe}
            onCancelButtonClick={this.onCancelButtonClick}
            setEditModeToFalseAndGetNewShoesData={
              this.setEditModeToFalseAndGetNewShoesData
            }
          />
        )}
        <AddShoe
          type={this.state.type}
          setEditModeToFalseAndGetNewShoesData={
            this.setEditModeToFalseAndGetNewShoesData
          }
        />
        {this.state.shoesData.length !== 0 ? (
          <div className="shoe-cards-container">{this.renderShoes()}</div>
        ) : this.state.error ? (
          <Redirect to="/not-found" />
        ) : (
          <Spinner />
        )}
      </>
    );
  }
}
