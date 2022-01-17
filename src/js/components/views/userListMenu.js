'use strict';

import React, { PureComponent } from 'react';
import appConst from '../../constants/appConst';

// меню для сортировки/поиска по списку пользователей
export default class UsersListMenu extends PureComponent {

    constructor(props) {
        super(props);
    }

	changeSortType = (event) => {
        this.props.setSortType(event.target.value);
    }

    changeSearchType = (event) => {
        this.props.setSearchType(event.target.value);
    }

    changeSearchText = (event) => {
        this.props.setSearchText(event.target.value);
    }

    render() {
        const className = 'users-list-menu ' + (this.props.className ? this.props.className : '');
        
        return (
            <div className = {className}>
                <div className='menu__search-types'>
                    <span>Искать</span>
                    <input 
                        name = "searchText"
                        type="text" 
                        className = '' 
                        maxLength = '40'
                        value = {this.props.searchText}
                        onChange = {this.changeSearchText}
                    />
                    <select
                        name="search-type"
                        className = "menu__select"
                        onChange = {this.changeSearchType}
                        value = {this.props.searchType ? this.props.searchType.name : appConst.defaultSearchType}
                    >
                        <option value={appConst.searchTypes.name}>{appConst.searchTypes.name.name}</option>
                        <option value={appConst.searchTypes.personalPage}>{appConst.searchTypes.personalPage.name}</option>
                        <option value={appConst.searchTypes.email}>{appConst.searchTypes.email.name}</option>
                        <option value={appConst.searchTypes.groupId}>{appConst.searchTypes.groupId.name}</option>
                        <option value={appConst.searchTypes.phone}>{appConst.searchTypes.phone.name}</option>
                        <option value={appConst.searchTypes.position}>{appConst.searchTypes.position.name}</option>
                    </select>
                </div>

                <div className='menu__sort-types'>
                    <span>Сортировать</span>
                    <select
                        name="sort-type"
                        className = "menu__select"
                        onChange = {this.changeSortType}
                        value = {this.props.sortType ? this.props.sortType.name : appConst.defaultSortType}
                    >
                        <option value={appConst.sortTypes.name}>{appConst.sortTypes.name.name}</option>
                        <option value={appConst.sortTypes.personalPage}>{appConst.sortTypes.personalPage.name}</option>
                        <option value={appConst.sortTypes.email}>{appConst.sortTypes.email.name}</option>
                        <option value={appConst.sortTypes.groupId}>{appConst.sortTypes.groupId.name}</option>
                        <option value={appConst.sortTypes.phone}>{appConst.sortTypes.phone.name}</option>
                        <option value={appConst.sortTypes.position}>{appConst.sortTypes.position.name}</option>
                    </select>
                </div>
            </div>
        )
    }
}