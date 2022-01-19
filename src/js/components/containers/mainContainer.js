'use strict';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Main from '../views/main';
import * as listActions from '../../actions/listActions';
import appConst from '../../constants/appConst';

// контейнер для главной страницы приложения 
class MainContainer extends PureComponent {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.resetListSettings();
    }

    // сброс настроек отображения списка пользователей к дефолтным
    resetListSettings = () => {
        this.props.setCurrentPage(1);
        this.props.setTotalPages(1);
        this.props.setSearchText('');
        this.props.setSearchType(appConst.defaultSearchType);
        this.props.setSortType(appConst.defaultSearchType);
        this.props.setSortDirectionType(appConst.defaultSortDirectionType);
    }

    render() {
        return (
            <Main
                colorTheme = {this.props.colorTheme}
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
        setSearchText: function(data) {
            dispatch(listActions.setSearchText(data));
        },
        setSearchType: function(data) {
            dispatch(listActions.setSearchType(data));
        },
        setSortType: function(data) {
            dispatch(listActions.setSortType(data));
        },
        setSortDirectionType: function(data) {
            dispatch(listActions.setSortDirectionType(data));
        },
        setCurrentPage: function(data) {
            dispatch(listActions.setCurrentPage(data));
        },
        setTotalPages: function(data) {
            dispatch(listActions.setTotalPages(data));
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);