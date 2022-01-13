'use strict';

import React, { PureComponent } from 'react';

// форма отображения пользователя в виде плитки
export default class UserTileForm extends PureComponent {

    constructor(props) {
        super(props);

        this.user = this.props.user;
    }



    render() {
        const className = 'user-tile-form ' + (this.props.className ? this.props.className : '');
        
        debugger;
        
        return (
            <div className = {className}>
                {/* <div className='user-tile-form_row'> */}
                    <div className=''>{this.user.name} {this.user.surname}</div>
                    <div className=''>{this.user.group}</div>
                {/* </div> */}
            </div>
        )
    }
}