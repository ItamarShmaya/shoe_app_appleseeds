import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/homepage/components/HomePage/HomePage";
import ShoesPage from "./components/shoespage/components/ShoesPage/ShoesPage";
import BrandPage from "./components/shoespage/components/BrandPage/BrandPage";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { Redirect } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/shoes" exact component={ShoesPage} />
            <Route path="/shoes/:brand" exact component={BrandPage} />
            <Route path="/not-found" exact component={PageNotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
