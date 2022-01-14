'use strict';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import UserList from '../views/usersList';
import usersConst from '../../constants/usersConst';
import {getUsers} from '../../utils/baseUtils';

// контейнер для списка пользователей
class UsersListContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.users = [];
    }

    componentWillMount() {
        debugger;

        // const usersJson = JSON.stringify(usersConst.users);
        // this.users = JSON.parse(usersJson);
        this.users = getUsers(10);
        
    }
    
    render() {
        debugger;
        return (
            <UserList 
                users = {this.users}
                viewType = {this.viewType}
            />
        );
    }
}

const mapStateToProps = function(store) {
    return {
        colorTheme: store.forumDesignState.get('colorTheme'),
        viewType: store.forumDesignState.get('viewType'),
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);