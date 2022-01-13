'use strict';

import React, { PureComponent } from 'react';

// табличная форма отображения пользователя
export default class UserTableForm extends PureComponent {

    constructor(props) {
        super(props);

        this.user = this.props.user;
    }



    render() {
        const className = 'user-table-form ' + (this.props.className ? this.props.className : '');
        
        debugger;
        
        return (
            <div className = {className}>
                {/* <div className='user-table-form_row'> */}
                    <div className=''>{this.user.name} {this.user.surname}</div>
                    <div className=''>{this.user.personalPage}</div>
                    <div className=''>{this.user.email}</div>
                    <div className=''>{this.user.group}</div>
                    <div className=''>{this.user.phone}</div>
                {/* </div> */}
            </div>
        )
    }
}