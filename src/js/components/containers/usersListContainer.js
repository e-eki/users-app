'use strict';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import UserList from '../views/usersList';
import UsersListMenu from '../views/userListMenu';
import usersConst from '../../constants/usersConst';
import {getUsers} from '../../utils/baseUtils';
import appConst from '../../constants/appConst';
import * as usersActions from '../../actions/usersActions';
import * as searchActions from '../../actions/searchActions';

// контейнер для списка пользователей
class UsersListContainer extends PureComponent {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger;
        this.getUsers();
    }

    componentDidUpdate(prevProps, prevState) {
        debugger;
        if (prevProps.viewType !== this.props.viewType) {
            this.getUsers();
        } 
    }

    getUsers = () => {
        // const usersJson = JSON.stringify(usersConst.users);
        // this.users = JSON.parse(usersJson);
        const {searchText, searchType, sortType, viewType} = this.props;
    
        debugger;
        if (viewType === appConst.viewTypes.tiles) {
            const usersByGroups = usersConst.usersByGroups;
            this.props.setUsersByGroups(usersByGroups);
        } else {
            const users = getUsers(10);
            this.props.setUsers(users);
        }
    }
    
    render() {
        debugger;
        return (
            <div>
                <UsersListMenu
                    searchText = {this.props.searchText}
                    searchType = {this.props.searchType}
                    sortType = {this.props.sortType}
                    setSearchText = {this.props.setSearchText}
                    setSearchType = {this.props.setSearchType}
                    setSortType = {this.props.setSortType}
                    getUsers = {this.getUsers}
                />

                <UserList 
                    users = {this.props.users}
                    usersByGroups = {this.props.usersByGroups}
                    viewType = {this.props.viewType}
                />
            </div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        colorTheme: store.forumDesignState.get('colorTheme'),
        viewType: store.forumDesignState.get('viewType'),
        users: store.usersState.get('users'),
        usersByGroups: store.usersState.get('usersByGroups'),
        searchText: store.usersState.get('searchText'),
        searchType: store.usersState.get('searchType'),
        sortType: store.usersState.get('sortType')
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        setUsers: function(data) {
            dispatch(usersActions.setUsers(data));
        },
        setUsersByGroups: function(data) {
            dispatch(usersActions.setUsersByGroups(data));
        },
        setSearchText: function(data) {
            dispatch(searchActions.setSearchText(data));
        },
        setSearchType: function(data) {
            dispatch(searchActions.setSearchType(data));
        },
        setSortType: function(data) {
            dispatch(searchActions.setSortType(data));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);