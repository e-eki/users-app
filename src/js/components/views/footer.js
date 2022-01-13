'use strict';

import React, { PureComponent } from 'react';

// Подвал страницы
export default class Footer extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const className = 'footer ' + (this.props.className ? this.props.className : '');
        
        return (
            <div className = {className}>
                <div className ="footer__title">
                    Test JS Task, 2022
                </div>
            </div>
        )
    }
}