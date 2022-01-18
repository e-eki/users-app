'use strict';

import React, { PureComponent } from 'react';
import UserTileForm from './userTileForm';

// форма отображения группы пользователей
export default class GroupForm extends PureComponent {

    constructor(props) {
        super(props);
    }

    // получить элементы с информацией о пользователях
    getUserItems = () => {
        const userItems = [];

        for (let i = 0; i < this.props.users.length; i++) {
            const user = this.props.users[i];
            const userItem = <UserTileForm key={i} user={user}/>;
            userItems.push(userItem);
        }

        return userItems;
    }

    render() {
        const className = 'group-form ' + (this.props.className ? this.props.className : '');
        const userItems = this.getUserItems();
        
        return (
            <div className = {className}>
                <div className='group-form__name'>{this.props.groupName}</div>
                {userItems}
            </div>
        )
    }
}