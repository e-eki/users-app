'use strict';

import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router';
const createBrowserHistory = require("history").createBrowserHistory;    //?? через import
import MainContainer from './components/containers/mainContainer';
import Header from './components/views/header';
import MenuContainer from './components/containers/menuContainer';
import Footer from './components/views/footer';
import AlertFormContainer from './components/containers/alertFormContainer';
import SearchFormContainer from './components/containers/SearchFormContainer';
import BreadcrumbsContainer from './components/containers/BreadcrumbsContainer';
import UsersListContainer from './components/containers/usersListContainer';
import appConst from './constants/appConst';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.history = createBrowserHistory();

    // стили по умолчанию
    this.defaultClassNames = {
      pageClassName: 'page_day-mode',
    }

    this.state = {
      // стиль оформления страницы
      pageClassName: this.defaultClassNames.pageClassName,
    };

    this.changePageColorTheme = this.changePageColorTheme.bind(this);
  }

  // изменить тему оформления
  changePageColorTheme(colorTheme) {
    debugger;
    const dayModeModificator = '_day-mode';
    const nightModeModificator = '_night-mode';

    // оформление страницы
    let pageClassName = 'page';

    switch (colorTheme) {
      case appConst.colorThemes.day:
        pageClassName += dayModeModificator;
        break;

      case appConst.colorThemes.night:
        pageClassName += nightModeModificator;
        break;

      default:
        pageClassName = this.defaultClassNames.pageClassName;
        break;
    }

    this.setState({
      pageClassName: pageClassName,
    });
  }

  render() {
    debugger;
    const pageClassName = 'page ' + this.state.pageClassName;

      return (
        <div className = {pageClassName}>
          <Header/>

          {/* <div className = 'content'> */}
            <Router history={this.history}>
              <AlertFormContainer/>

              <MenuContainer
                changePageColorTheme = {this.changePageColorTheme}
              />

              {/* <SearchFormContainer/> */}

              {/* <BreadcrumbsContainer/> */}

              <Switch>
                <Route exact path="/" component={MainContainer} />
                <Route exact path="/users" component={UsersListContainer} />
                {/* <Route strict path="/search" component={SearchResultsContainer} /> */}
                <Redirect to="/" />
              </Switch>
            </Router>
          {/* </div> */}

          <Footer className = 'page__footer '/>
        </div>
      )  
  }
}




