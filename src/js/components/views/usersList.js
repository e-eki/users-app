'use strict';

import React, { PureComponent } from 'react';
import UserTableForm from './forms/userTableForm';
import UserCardForm from './forms/userCardForm';
import GroupForm from './forms/groupForm';
import appConst from '../../constants/appConst';

// список пользователей
export default class UserList extends PureComponent {

    constructor(props) {
        super(props);
    }

    // получить список элементов с информацией о пользователях
    getUserItemsList = () => {
        const userItemsList = [];

        for (let i = 0; i < this.props.users.length; i++) {
            const userItem = this.getUserItem(this.props.viewType, i, this.props.users[i]);
            userItemsList.push(userItem);
        }

        return userItemsList;
    }

    // получить список групп пользователей
    getGroupItemsList = () => {
        const userItemsList = [];

        for (let i = 0; i < this.props.usersByGroups.length; i++) {
            const userItem = this.getUserGroupItem(i, this.props.usersByGroups[i]);
            userItemsList.push(userItem);
        }

        return userItemsList;
    }

    // получить элемент с информацией о группе
    getUserGroupItem = (i, group) => {
        const groupItem = <GroupForm key={i} groupName={group.name} users={group.users}/>;
        return groupItem;
    }

    // получить элемент с информацией о пользователе
    getUserItem = (viewType, i, user) => {
        if (!!viewType && viewType.value === appConst.viewTypes.cards.value) {
            return <UserCardForm key={i} user={user}/>;
        } else {
            return <UserTableForm key={i} user={user} number={i}/>;
        }
    }

    render() {
        const className = 'users-list ' 
                            + ((!!this.props.viewType && this.props.viewType.value === appConst.viewTypes.cards.value) ? 'users-list_cards-view' : '')
                            + ((!!this.props.viewType && this.props.viewType.value === appConst.viewTypes.tiles.value) ? 'users-list_tiles-view' : '')
                            + (this.props.className ? this.props.className : '');
                            
        let itemsList = [];
        
        if (this.props.viewType && this.props.viewType.value === appConst.viewTypes.tiles.value) {
            if (this.props.usersByGroups) {
                itemsList = this.getGroupItemsList();
            }
        } else if (this.props.users) {
            itemsList = this.getUserItemsList();
        }
        
        return (
            <div className = {className}>
                {itemsList}
            </div>
        )
    }
}