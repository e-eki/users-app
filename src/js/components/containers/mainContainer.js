'use strict';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Main from '../views/main';

// контейнер для главной страницы приложения 
class MainContainer extends PureComponent {

    constructor(props) {
        super(props);
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
        // 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);