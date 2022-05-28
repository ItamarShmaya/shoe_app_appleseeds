import React from "react";
import "./ShoesPage.css";
import { NavLink } from "react-router-dom";

export default class Shoespage extends React.Component {
  state = { headerHeight: "" };
  componentDidMount = () => {
    const header = document.querySelector(".header");
    const headerHeight = getComputedStyle(header).height;
    this.setState({ headerHeight });
  };

  render() {
    return (
      <div
        style={{ height: `calc(100vh - ${this.state.headerHeight})` }}
        className="shoes-sections-wrapper"
      >
        <div className="shoes-sections-container">
          <NavLink to="/shoes/flipflops">
            <div className="flip-flops shoe-section">
              <div className="text-container">
                <span>Flip Flops</span>
              </div>
            </div>
          </NavLink>
          <NavLink to="/shoes/heels">
            <div className="heels shoe-section">
              <div className="text-container">
                <span>Heels</span>
              </div>
            </div>
          </NavLink>
          <NavLink to="/shoes/sneakers">
            <div className="nike shoe-section">
              <div className="text-container">
                <span>Sneakers</span>
              </div>
            </div>
          </NavLink>
          <NavLink to="/shoes/classic">
            <div className="classic shoe-section">
              <div className="text-container">
                <span>Classic</span>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
}
