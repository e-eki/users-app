'use strict';

import Promise from 'bluebird';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Menu from '../views/menu';
import appConst from '../../constants/appConst';
import { setColorTheme, setViewType } from '../../actions/forumDesignActions';

// контейнер для меню
class MenuContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.changeViewType = this.changeViewType.bind(this);
        this.changeColorTheme = this.changeColorTheme.bind(this);
        this.getColorThemeButtonTitle = this.getColorThemeButtonTitle.bind(this);
    }

    changeViewType(data) {
        this.props.setViewType(data);
    }

    // изменение темы оформления
    changeColorTheme() {
        switch (this.props.colorTheme) {
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
        let title;

        switch (this.props.colorTheme) {
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
        const colorThemeTitle = this.getColorThemeButtonTitle();

        return (
            <Menu
                colorThemeTitle = {colorThemeTitle}
                changeColorTheme = {this.changeColorTheme}
                changeViewType = {this.changeViewType}
                viewType = {this.props.viewType}
            />
        );
    }
}

const mapStateToProps = function(store) {
    return {
        colorTheme: store.forumDesignState.get('colorTheme'),
        viewType: store.forumDesignState.get('viewType'),
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        setColorTheme: function(data) {
            dispatch(setColorTheme(data));
        },
        setViewType: function(data) {
            dispatch(setViewType(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);