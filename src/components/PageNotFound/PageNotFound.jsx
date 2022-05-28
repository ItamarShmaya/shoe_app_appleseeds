import React from "react";
import "./PageNotFound.css";

export default class PageNotFound extends React.Component {
  onBackButtonClick = () => {
    console.log(this.props);
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="not-found">
        <h1>Page Not Found</h1>
        <button className="btn" onClick={this.onBackButtonClick}>
          Back
        </button>
      </div>
    );
  }
}
