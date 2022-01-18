'use strict';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import UserList from '../views/usersList';
import UsersListMenu from '../views/userListMenu';
import appConst from '../../constants/appConst';
import * as usersActions from '../../actions/usersActions';
import * as listActions from '../../actions/listActions';
import PagingForm from '../views/forms/pagingForm';
import * as usersApi from '../../api/usersApi';
import {getUsersByGroups} from '../../api/usersByGroupsApi';
import {showErrorMessage} from '../../utils/baseUtils';

// контейнер для списка пользователей
class UsersListContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.ignoreCurrentPage = false;
    }

    componentDidMount() {
        this.getUsers();
    }

    componentDidUpdate(prevProps, prevState) {
        let newCurrentPage = null;
        if (prevProps.viewType !== this.props.viewType ||
            prevProps.searchText !== this.props.searchText ||
            prevProps.searchType !== this.props.searchType) {
                // если изменились данные поиска, то текущая страница сбрасывается
                // чтобы получение списка пользователей в этом случае происходило 
                // один раз с новой текущей страницей, а не дважды, со старой и с новой страницей,
                // то не устанавливаем ее через здесь, а передаем в this.getUsers,
                // где она устанавливается после запроса
                newCurrentPage = 1;
        }
        if (prevProps.viewType !== this.props.viewType ||
            (prevProps.currentPage !== this.props.currentPage && !this.ignoreCurrentPage) ||
            prevProps.sortType !== this.props.sortType ||
            prevProps.sortDirectionType !== this.props.sortDirectionType ||
            (prevProps.searchType !== this.props.searchType && !!this.props.searchText) ||
            prevProps.searchText !== this.props.searchText) {
                this.getUsers(newCurrentPage);
        }
    }

    // получение списка пользователей
    getUsers = async (newCurrentPage = null) => {
        try {
            const {searchText, searchType, sortType, sortDirectionType, viewType, currentPage} = this.props;

            const actualCurrentPage = newCurrentPage || currentPage;
            const limitByViewType = (viewType ? viewType.limit : appConst.viewTypes[`${appConst.defaultViewType}`].limit);

            const filter = {
                start: ((!!actualCurrentPage && (actualCurrentPage > 1)) ? ((actualCurrentPage - 1) * limitByViewType) : ''),
                limit: limitByViewType,
                sortType: (!!sortType ? sortType.value : appConst.defaultSortType),
                sortDirectionType: (!!sortDirectionType ? sortDirectionType.value : appConst.defaultSortDirectionType),
                searchText: searchText || '',
                searchType: (!!searchType ? searchType.value : appConst.defaultSearchType)
            };

            let response;
            if (!!viewType && (viewType.value === appConst.viewTypes.tiles.value)) {
                response = await getUsersByGroups(filter);
                const usersByGroups = JSON.parse(response.data);
                this.props.setUsersByGroups(usersByGroups);
            } else {
                response = await usersApi.getUsers(filter);
                const users = JSON.parse(response.data);
                this.props.setUsers(users);
            }

            if (response && response.total) {
                const totalPages = Math.ceil(response.total / limitByViewType);
                this.props.setTotalPages(totalPages);
            }
            if (!!newCurrentPage) {
                // флаг ignoreCurrentPage нужен, чтобы не получать заново список с сервера при сбросе страницы
                this.ignoreCurrentPage = true;  
                this.props.setCurrentPage(newCurrentPage);
                this.ignoreCurrentPage = false;
            }
        } catch(error) {
          showErrorMessage(error);
        }
      }
    
    render() {
        return (
            <div>
                <UsersListMenu
                    searchText = {this.props.searchText}
                    searchType = {this.props.searchType}
                    sortType = {this.props.sortType}
                    sortDirectionType = {this.props.sortDirectionType}
                    setSearchText = {this.props.setSearchText}
                    setSearchType = {this.props.setSearchType}
                    setSortType = {this.props.setSortType}
                    setSortDirectionType = {this.props.setSortDirectionType}
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
        searchText: store.listState.get('searchText'),
        searchType: store.listState.get('searchType'),
        sortType: store.listState.get('sortType'),
        sortDirectionType: store.listState.get('sortDirectionType'),
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
        setSortDirectionType: function(data) {
            dispatch(listActions.setSortDirectionType(data));
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