'use strict';

import React, { PureComponent } from 'react';

// табличная форма отображения пользователя
export default class UserTableForm extends PureComponent {

    constructor(props) {
        super(props);
    }



    render() {
        const className = 'user-table-form ' + ((this.props.number % 2 == 0) ? '' : 'user-table-form_darkened') + (this.props.className ? this.props.className : '');
        debugger;
        
        return (
            <div className = {className}>
                {/* <div className='user-table-form_row'> */}
                    <div className='user-table-form__name'>{this.props.user.firstName} {this.props.user.lastName}</div>
                    <div className='user-table-form__page'>{this.props.user.personalPage}</div>
                    <div className='user-table-form__email'>{this.props.user.email}</div>
                    <div className='user-table-form__group'>{this.props.user.group}</div>
                    <div className='user-table-form__phone'>{this.props.user.phone}</div>
                {/* </div> */}
            </div>
        )
    }
}