'use strict';

import React, { PureComponent } from 'react';
import Logo from './logo';
import appConst from '../../constants/appConst';

// заголовок страницы
export default class Header extends PureComponent {

    constructor(props) {
        super(props);

        // название приложения
        this.appName = appConst.appName;
    }

    render() {
        const className = 'header ' + (this.props.className ? this.props.className : '');
        
        return (
            <div className = {className}>
                <Logo className = 'header__logo '/>

                <div className = "header__title">
                    <h1>{this.appName}</h1>
                </div>
            </div>
        )
    }
}