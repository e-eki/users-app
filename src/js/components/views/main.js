'use strict';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import appConst from '../../constants/appConst';

// главная страница приложения
export default class Main extends PureComponent {

    constructor(props) {
        super(props);
    }
    
    render() {
        const className = 'main ' + (this.props.className ? this.props.className : '');
        
        return (
            <div className = {className}>
                111111

                <Link to={appConst.usersLink}>
                    USERS
                </Link> 
            </div>
        )
    }
}