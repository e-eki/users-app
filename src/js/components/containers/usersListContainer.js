'use strict';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import UserList from '../views/usersList';
import usersConst from '../../constants/usersConst';
import {getUsers} from '../../utils/baseUtils';
import appConst from '../../constants/appConst';
import {setUsers} from '../../actions/usersActions';

// контейнер для списка пользователей
class UsersListContainer extends PureComponent {

    constructor(props) {
        super(props);

        // this.state = {
        //     users = [],
        // }
    }

    componentWillMount() {
        debugger;
        this.getUsers();
    }

    componentWillUpdate(prevProps, prevState) {
        debugger;
        if (prevProps.viewType !== this.props.viewType) {
            this.getUsers();
        } 
    }

    getUsers = () => {
        // const usersJson = JSON.stringify(usersConst.users);
        // this.users = JSON.parse(usersJson);
        
        // if (this.props.viewType === appConst.viewTypes.tiles) {
        //     this.state.users = usersConst.usersByGroups;
        // } else {
        //     this.state.users = getUsers(10);
        // }

        const users = getUsers(10);
        this.props.setUsers(users);
    }
    
    render() {
        debugger;
        return (
            <UserList 
                users = {this.props.users}
                viewType = {this.props.viewType}
            />
        );
    }
}

const mapStateToProps = function(store) {
    return {
        colorTheme: store.forumDesignState.get('colorTheme'),
        viewType: store.forumDesignState.get('viewType'),
        users: store.usersState.get('users')
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        setUsers: function(data) {
            dispatch(setUsers(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);