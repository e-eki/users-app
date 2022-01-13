'use strict';

import Promise from 'bluebird';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Menu from '../views/menu';
import appConst from '../../constants/appConst';
import { setColorTheme } from '../../actions/forumDesignActions';

// контейнер для меню
class MenuContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.changeColorTheme = this.changeColorTheme.bind(this);
        this.getColorThemeButtonTitle = this.getColorThemeButtonTitle.bind(this);
    }

    // изменение темы оформления
    changeColorTheme() {
        debugger;

        switch (this.props.colorTheme) {
            // case appConst.colorThemes.day:
            //     this.props.setColorTheme(appConst.colorThemes.night);
            //     this.props.changePageColorTheme(appConst.colorThemes.night);
            //     break;

            case appConst.colorThemes.night:
                this.props.setColorTheme(appConst.colorThemes.day);
                this.props.changePageColorTheme(appConst.colorThemes.day);
                break;
        
            case appConst.colorThemes.day:
            default:
                this.props.setColorTheme(appConst.colorThemes.night);
                this.props.changePageColorTheme(appConst.colorThemes.night);
                break;
        }
    }

    // получить название кнопки для переключения темы оформления
    getColorThemeButtonTitle() {
        debugger;
        let title;

        switch (this.props.colorTheme) {
            // case appConst.colorThemes.day:
            //   title = appConst.colorThemeTitles.night;
            //   break;

            case appConst.colorThemes.night:
                title = appConst.colorThemeTitles.day;
                break;
        
            case appConst.colorThemes.day:
            default:
                title = appConst.colorThemeTitles.night;
                break;
        }

        return title;
    }
    
    render() {
        debugger;
        const colorThemeTitle = this.getColorThemeButtonTitle();

        return (
            <Menu
                colorThemeTitle = {colorThemeTitle}
                changeColorTheme = {this.changeColorTheme}
            />
        );
    }
}

const mapStateToProps = function(store) {
    return {
        colorTheme: store.forumDesignState.get('colorTheme'),
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        setColorTheme: function(data) {
            dispatch(setColorTheme(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);