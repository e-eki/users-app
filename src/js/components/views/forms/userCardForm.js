'use strict';

import React, { PureComponent } from 'react';

// форма отображения пользователя в виде карточки
export default class UserCardForm extends PureComponent {

    constructor(props) {
        super(props);

        this.user = this.props.user;
    }

    // r = () => console.log('qqq');  //todo!!!

    render() {
        const className = 'user-card-form ' + (this.props.className ? this.props.className : '');
        
        debugger;
        
        return (
            <div className = {className}>
                {/* <div className='user-card-form_card'> */}
                    <div className='user-card-form__name'>{this.user.firstName} {this.user.lastName}</div>
                    <img 
                        name = 'user-image'
                        className = 'user-card-form__img' 
                        src = '/images/user.png' 
                        alt = 'Фото пользователя'
                        title = 'Фото пользователя'
                    >
                    </img>
                    <div className='user-card-form__group'>{this.user.group}</div>
                    <div className='user-card-form__phone'>{this.user.phone}</div>
                {/* </div> */}
            </div>
        )
    }
}