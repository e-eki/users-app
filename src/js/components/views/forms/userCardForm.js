'use strict';

import React, { PureComponent } from 'react';

// форма отображения пользователя в виде карточки
export default class UserCardForm extends PureComponent {

    constructor(props) {
        super(props);
    }

    // r = () => console.log('qqq');  //todo!!!

    render() {
        const className = 'user-card-form ' + (this.props.className ? this.props.className : '');
        
        debugger;
        
        return (
            <div className = {className}>
                {/* <div className='user-card-form_card'> */}
                    <div className='user-card-form__name'>{this.props.user.firstName} {this.props.user.lastName}</div>
                    <img 
                        name = 'user-image'
                        className = 'user-card-form__img' 
                        src = '/images/user.png' 
                        alt = 'Фото пользователя'
                        title = 'Фото пользователя'
                    >
                    </img>
                    <div className='user-card-form__group'>{this.props.user.group}</div>
                    <div className='user-card-form__phone'>{this.props.user.phone}</div>
                {/* </div> */}
            </div>
        )
    }
}