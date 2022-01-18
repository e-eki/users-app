'use strict';

import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router';
const createBrowserHistory = require("history").createBrowserHistory;    //?? через import
import MainContainer from './components/containers/mainContainer';
import Header from './components/views/header';
import MenuContainer from './components/containers/menuContainer';
import Footer from './components/views/footer';
import UsersListContainer from './components/containers/usersListContainer';
import appConst from './constants/appConst';
import {generateUsers, groups} from './utils/generateDataUtils';
import * as usersApi from './api/usersApi';
import * as groupsApi from './api/groupsApi';
import AlertFormContainer from './components/containers/alertFormContainer';
import {showErrorMessage} from './utils/baseUtils';

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
  }

  saveDataToDB = async () => {
    // await this.saveGroupsToDB();
    await this.saveUsersToDB();
  }

  saveGroupsToDB = async () => {
    try {
      for (let i = 0; i < groups.length; i++) {
        await groupsApi.createGroup(groups[i]);
      }
    } catch(error) {
      showErrorMessage(error);
    }
  }

  saveUsersToDB = async () => {
    try {
      const users = generateUsers(5);
      
      for (let i = 0; i < users.length; i++) {
        await usersApi.createUser(users[i]);
      }
    } catch(error) {
      showErrorMessage(error);
    }
  }

  // изменить тему оформления
  changePageColorTheme = (colorTheme) => {
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
    const pageClassName = 'page ' + this.state.pageClassName;

      return (
        <div className = {pageClassName}>
          <Header/>
          
          <button onClick={this.saveDataToDB}>GENERATE DATA AND SAVE TO DB</button>

          <Router history={this.history}>
            <AlertFormContainer />
            
            <MenuContainer
              changePageColorTheme = {this.changePageColorTheme}
            />

            <Switch>
              <Route exact path="/" component={MainContainer} />
              <Route exact path="/users" component={UsersListContainer} />
              <Redirect to="/" />
            </Switch>
          </Router>

          <Footer className = 'page__footer '/>
        </div>
      )  
  }
}




