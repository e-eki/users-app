'use strict';

import React, { PureComponent } from 'react';

// форма отображения пользователя в виде плитки
export default class UserTileForm extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const className = 'user-tile-form ' + (this.props.className ? this.props.className : '');
        
        return (
            <div className = {className}>
                <div className = 'user-tile-form__name'>{this.props.user.firstName} {this.props.user.lastName}</div>
                <div className = 'user-tile-form__position'>{this.props.user.position}</div>
            </div>
        )
    }
}