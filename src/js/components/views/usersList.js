'use strict';

import React, { PureComponent } from 'react';
import UserTableForm from './forms/userTableForm';
import UserCardForm from './forms/userCardForm';
import UserTileForm from './forms/userTileForm';
import appConst from '../../constants/appConst';
import usersConst from '../../constants/usersConst';

// список пользователей
export default class UserList extends PureComponent {

    constructor(props) {
        super(props);


    }

    getUserItemsList = () => {
        debugger;
        const userItemsList = [];

        for (let i = 0; i < this.props.users.length; i++) {
            const userItem = this.getUserItem(this.props.viewType, i, this.props.users[i]);
            userItemsList.push(userItem);
        }

        return userItemsList;
    }

    getUserItem = (viewType, i, user) => {
        let userItem = null;

        switch (viewType) {
            case appConst.viewTypes.tiles:
                const usersByGroups = this.getUsersByGroups(this.props.users);

                for (let i = 0; i++; i < usersByGroups.length) {
                    const group = usersByGroups[i];

                    
                }

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

    getUsersByGroups = (users) => {
        const usersByGroups = usersConst.usersByGroups;

        //todo!


        return usersByGroups;
    }


    render() {
        const className = 'users-list ' + ((this.props.viewType === appConst.viewTypes.cards) ? 'users-list_cards-view' : '') 
                            + (this.props.className ? this.props.className : '');
        
        debugger;
        const userItemsList = this.getUserItemsList();
        
        return (
            <div className = {className}>
                {userItemsList}
            </div>
        )
    }
}