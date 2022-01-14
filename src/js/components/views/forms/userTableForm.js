'use strict';

import React, { PureComponent } from 'react';

// табличная форма отображения пользователя
export default class UserTableForm extends PureComponent {

    constructor(props) {
        super(props);

        this.user = this.props.user;
    }



    render() {
        const className = 'user-table-form ' + ((this.props.number % 2 == 0) ? '' : 'user-table-form_darkened') + (this.props.className ? this.props.className : '');
        debugger;
        
        return (
            <div className = {className}>
                {/* <div className='user-table-form_row'> */}
                    <div className='user-table-form__name'>{this.user.firstName} {this.user.lastName}</div>
                    <div className='user-table-form__page'>{this.user.personalPage}</div>
                    <div className='user-table-form__email'>{this.user.email}</div>
                    <div className='user-table-form__group'>{this.user.group}</div>
                    <div className='user-table-form__phone'>{this.user.phone}</div>
                {/* </div> */}
            </div>
        )
    }
}