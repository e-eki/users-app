'use strict';

import React, { PureComponent } from 'react';

// форма отображения пользователя в виде карточки
export default class UserCardForm extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const className = 'user-card-form ' + (this.props.className ? this.props.className : '');
        const groupClassName = 'user-card-form__group ' + (!!this.props.user.groupName ? '' : 'user-card-form_bold');
        
        return (
            <div className = {className}>
                <div className='user-card-form__name'>{this.props.user.firstName} {this.props.user.lastName}</div>
                <img 
                    name = 'user-image'
                    className = 'user-card-form__img' 
                    src = '/images/user.png' 
                    alt = 'Фото пользователя'
                    title = 'Фото пользователя'
                >
                </img>
                <div className={groupClassName}>{this.props.user.groupName || 'Unmanaged'}</div>
                <div className='user-card-form__phone'>{this.props.user.phone}</div>
            </div>
        )
    }
}