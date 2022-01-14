'use strict';

import React, { PureComponent } from 'react';
import UserTableForm from './forms/userTableForm';
import UserCardForm from './forms/userCardForm';
import UserTileForm from './forms/userTileForm';
import appConst from '../../constants/appConst';

// список пользователей
export default class UserList extends PureComponent {

    constructor(props) {
        super(props);

        this.users = this.props.users || [];
    }

    getUserItemsList = () => {
        debugger;
        const userItemsList = [];

        for (let i = 0; i < this.users.length; i++) {
            const userItem = this.getUserItem(this.props.viewType, i, this.users[i]);
            userItemsList.push(userItem);
        }

        return userItemsList;
    }

    getUserItem = (viewType, i, user) => {
        let userItem = null;

        switch (viewType) {
            case appConst.viewTypes.tiles:
                userItem = <UserTileForm key={i} user={user}/>
                break;

            case appConst.viewTypes.cards:
                userItem = <UserCardForm key={i} user={user}/>
                break;

            case appConst.viewTypes.table:
            default:
                userItem = <UserTableForm key={i} user={user} number={i}/>
                break;
        }

        return userItem;
    }


    render() {
        const className = 'users-list ' + (this.props.className ? this.props.className : '');
        
        debugger;
        const userItemsList = this.getUserItemsList();
        
        return (
            <div className = {className}>
                {userItemsList}
            </div>
        )
    }
}