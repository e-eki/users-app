'use strict';

import React, { PureComponent } from 'react';
import UserTableForm from './forms/userTableForm';
import UserCardForm from './forms/userCardForm';
import UserTileForm from './forms/userTileForm';

// список пользователей
export default class UserList extends PureComponent {

    constructor(props) {
        super(props);

        this.users = this.props.users || [];
    }


    render() {
        const className = 'users-list ' + (this.props.className ? this.props.className : '');
        
        debugger;
        
        const content = [];
        for (let i = 0; i < this.users.length; i++) {
            const userItem = <UserTableForm key={i} user={this.users[i]}/>;
            content.push(userItem);
        }
        
        return (
            <div className = {className}>
                {content}
            </div>
        )
    }
}