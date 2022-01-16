'use strict';

import React, { PureComponent } from 'react';
import UserTableForm from './forms/userTableForm';
import UserCardForm from './forms/userCardForm';
import UserTileForm from './forms/userTileForm';
import GroupForm from './forms/groupForm';
import appConst from '../../constants/appConst';

// список пользователей
export default class UserList extends PureComponent {

    constructor(props) {
        super(props);

        // const {
        //     currentPage,
        //     totalPages,
        //     setNextPage,
        //     setPreviousPage,
        //     nextEnabled,
        //     previousEnabled,
        //     startIndex,
        //     endIndex,
        // } = usePagination({ totalItems: 0 });
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

    getGroupItemsList = () => {
        debugger;
        const userItemsList = [];

        for (let i = 0; i < this.props.usersByGroups.length; i++) {
            const userItem = this.getUserGroupItem(i, this.props.usersByGroups[i]);
            userItemsList.push(userItem);
        }

        return userItemsList;
    }

    getUserGroupItem = (i, group) => {
        const groupItem = <GroupForm key={i} groupName={group.groupName} users={group.users}/>;
        return groupItem;
    }

    getUserItem = (viewType, i, user) => {
        let item = null;

        switch (viewType) {
            case appConst.viewTypes.cards:
               item = <UserCardForm key={i} user={user}/>
                break;

            case appConst.viewTypes.table:
            default:
                item = <UserTableForm key={i} user={user} number={i}/>
                break;
        }

        return item;
    }

    changePage = () => {
        debugger;
    }

    render() {
        const className = 'users-list ' 
                            + ((this.props.viewType === appConst.viewTypes.cards) ? 'users-list_cards-view' : '')
                            + ((this.props.viewType === appConst.viewTypes.tiles) ? 'users-list_tiles-view' : '')
                            + (this.props.className ? this.props.className : '');
        
        debugger;
        let itemsList = [];
        
        if ((this.props.viewType === appConst.viewTypes.tiles) && this.props.usersByGroups) {
            itemsList = this.getGroupItemsList();
            
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