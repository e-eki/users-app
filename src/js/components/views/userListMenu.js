'use strict';

import React, { PureComponent } from 'react';
import appConst from '../../constants/appConst';

// меню для сортировки/поиска по списку пользователей
export default class UsersListMenu extends PureComponent {

    constructor(props) {
        super(props);
    }

	changeSortType = (event) => {
        debugger;
        this.props.setSortType(event.target.value);
    }

    changeSearchType = (event) => {
        debugger;
        this.props.setSearchType(event.target.value);
    }

    changeSearchText = (event) => {
        debugger;
        this.props.setSearchText(event.target.value);
    }

    render() {
        debugger;
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
                        value = {this.props.searchType}
                    >
                        <option value={appConst.searchTypes.name}>{appConst.searchTypes.name}</option>
                        <option value={appConst.searchTypes.personalPage}>{appConst.searchTypes.personalPage}</option>
                        <option value={appConst.searchTypes.email}>{appConst.searchTypes.email}</option>
                        <option value={appConst.searchTypes.group}>{appConst.searchTypes.group}</option>
                        <option value={appConst.searchTypes.phone}>{appConst.searchTypes.phone}</option>
                        <option value={appConst.searchTypes.position}>{appConst.searchTypes.position}</option>
                    </select>
                </div>

                <div className='menu__sort-types'>
                    <span>Сортировать</span>
                    <select
                        name="sort-type"
                        className = "menu__select"
                        onChange = {this.changeSortType}
                        value = {this.props.sortType}
                    >
                        <option value={appConst.sortTypes.name}>{appConst.sortTypes.name}</option>
                        <option value={appConst.sortTypes.personalPage}>{appConst.sortTypes.personalPage}</option>
                        <option value={appConst.sortTypes.email}>{appConst.sortTypes.email}</option>
                        <option value={appConst.sortTypes.group}>{appConst.sortTypes.group}</option>
                        <option value={appConst.sortTypes.phone}>{appConst.sortTypes.phone}</option>
                        <option value={appConst.sortTypes.position}>{appConst.sortTypes.position}</option>
                    </select>
                </div>
            </div>
        )
    }
}