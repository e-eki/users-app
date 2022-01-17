'use strict';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import UserList from '../views/usersList';
import UsersListMenu from '../views/userListMenu';
// import usersConst from '../../constants/usersConst';
import appConst from '../../constants/appConst';
import * as usersActions from '../../actions/usersActions';
import * as listActions from '../../actions/listActions';
import PagingForm from '../views/forms/pagingForm';
import * as usersApi from '../../api/usersApi';
import {getUsersByGroups} from '../../api/usersByGroupsApi';
import {showErrorMessage} from '../../utils/baseUtils';
import * as listUtils from '../../utils/listUtils';

// контейнер для списка пользователей
class UsersListContainer extends PureComponent {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getUsers();
    }

    componentDidUpdate(prevProps, prevState) {  //???
        debugger;
        if (prevProps.currentPage !== this.props.currentPage ||
            prevProps.sortType !== this.props.sortType) {
                this.getUsers();
        }
        if (prevProps.viewType !== this.props.viewType ||
            prevProps.searchText !== this.props.searchText ||
            prevProps.searchType !== this.props.searchType) {
                this.props.setCurrentPage(1);
                this.getUsers();
        }
    }

    // getUsers = () => {
    //     // const usersJson = JSON.stringify(usersConst.users);
    //     // this.users = JSON.parse(usersJson);
    //     const {searchText, searchType, sortType, viewType} = this.props;
    
    //     debugger;
    //     if (viewType === appConst.viewTypes.tiles) {
    //         const usersByGroups = []; //usersConst.usersByGroups;
    //         this.props.setUsersByGroups(usersByGroups);
    //         this.props.setTotalPages(usersByGroups.totalPages);  //todo
    //         this.props.setCurrentPage(usersByGroups.currentPage);
    //     } else {
    //         const users = []; //getUsers(10);
    //         this.props.setUsers(users);
    //         this.props.setTotalPages(users.totalPages);  //todo
    //         this.props.setCurrentPage(users.currentPage);
    //     }
    // }

    getUsers = async () => {
        try {
            const {searchText, searchType, sortType, viewType, currentPage} = this.props;
            debugger;
            const limitByViewType = (viewType ? viewType.limit : appConst.viewTypes[appConst.defaultViewType].limit);

            const filter = {
                start: ((!!currentPage && (currentPage !== 1)) ? (currentPage * limitByViewType) : ''),
                limit: limitByViewType,
                sortType: (!!sortType ? sortType.value : appConst.defaultSortType),
                searchText: searchText,
                searchType: (!!searchType ? searchType.value : appConst.defaultSearchType)
            };

            if (viewType === appConst.viewTypes.tiles.value) {
                const usersByGroups = await getUsersByGroups(filter);
                this.props.setUsersByGroups(usersByGroups);
            } else {
                const users = await usersApi.getUsers(filter);
                this.props.setUsers(users);
            }
        } catch(error) {
          showErrorMessage(error);
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
                />

                <UserList 
                    users = {this.props.users}
                    usersByGroups = {this.props.usersByGroups}
                    viewType = {this.props.viewType}
                />

                <PagingForm
                    currentPage = {this.props.currentPage}
                    setCurrentPage = {this.props.setCurrentPage}
                    totalPages = {this.props.totalPages}
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
        searchText: store.listState.get('searchText') || '',
        searchType: store.listState.get('searchType') || '',
        sortType: store.listState.get('sortType') || '',
        currentPage: store.listState.get('currentPage') || 1,
        totalPages: store.listState.get('totalPages') || 1
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
            dispatch(listActions.setSearchText(data));
        },
        setSearchType: function(data) {
            dispatch(listActions.setSearchType(data));
        },
        setSortType: function(data) {
            dispatch(listActions.setSortType(data));
        },
        setCurrentPage: function(data) {
            dispatch(listActions.setCurrentPage(data));
        },
        setTotalPages: function(data) {
            dispatch(listActions.setTotalPages(data));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);