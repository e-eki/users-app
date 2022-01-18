'use strict';

import React, { PureComponent } from 'react';
import appConst from '../../constants/appConst';

// меню для сортировки/поиска по списку пользователей
export default class UsersListMenu extends PureComponent {

    constructor(props) {
        super(props);
    }

    // изменение типа сортировки
	changeSortType = (event) => {
        const value = event.target.value;
        const sortType = appConst.sortTypes[`${value}`];
        this.props.setSortType(sortType);
    }

    // изменение типа направления сортировки
    changeSortDirectionType = (event) => {
        const value = event.target.value;
        const sortDirectionType = appConst.sortDirectionTypes[`${value}`];
        this.props.setSortDirectionType(sortDirectionType);
    }

    // изменение типа поиска
    changeSearchType = (event) => {
        const value = event.target.value;
        const searchType = appConst.searchTypes[`${value}`];
        this.props.setSearchType(searchType);
    }

    // изменение текстового значения для поиска
    changeSearchText = (event) => {
        this.props.setSearchText(event.target.value);
    }

    render() {
        const className = 'users-list-menu ' + (this.props.className ? this.props.className : '');

        const selectedSearchTypeValue = this.props.searchType ? this.props.searchType.value : appConst.searchTypes[`${appConst.defaultSearchType}`].value;
        const selectedSortTypeValue = this.props.sortType ? this.props.sortType.value : appConst.sortTypes[`${appConst.defaultSortType}`].value;
        const selectedSortDirectionTypeValue = this.props.sortDirectionType ? this.props.sortDirectionType.value : appConst.sortDirectionTypes[`${appConst.defaultSortDirectionType}`].value;

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
                        value = {selectedSearchTypeValue}
                    >
                        <option value={appConst.searchTypes.name.value}>{appConst.searchTypes.name.name}</option>
                        <option value={appConst.searchTypes.personalPage.value}>{appConst.searchTypes.personalPage.name}</option>
                        <option value={appConst.searchTypes.email.value}>{appConst.searchTypes.email.name}</option>
                        <option value={appConst.searchTypes.groupName.value}>{appConst.searchTypes.groupName.name}</option>
                        <option value={appConst.searchTypes.phone.value}>{appConst.searchTypes.phone.name}</option>
                        <option value={appConst.searchTypes.position.value}>{appConst.searchTypes.position.name}</option>
                    </select>
                </div>

                <div className='menu__sort-types'>
                    <span>Сортировать</span>
                    <select
                        name="sort-type"
                        className = "menu__select"
                        onChange = {this.changeSortType}
                        value = {selectedSortTypeValue}
                    >
                        <option value={appConst.sortTypes.name.value}>{appConst.sortTypes.name.name}</option>
                        <option value={appConst.sortTypes.personalPage.value}>{appConst.sortTypes.personalPage.name}</option>
                        <option value={appConst.sortTypes.email.value}>{appConst.sortTypes.email.name}</option>
                        <option value={appConst.sortTypes.groupName.value}>{appConst.sortTypes.groupName.name}</option>
                        <option value={appConst.sortTypes.phone.value}>{appConst.sortTypes.phone.name}</option>
                        <option value={appConst.sortTypes.position.value}>{appConst.sortTypes.position.name}</option>
                    </select>

                    <select
                        name="sort-direction-type"
                        className = "menu__select"
                        onChange = {this.changeSortDirectionType}
                        value = {selectedSortDirectionTypeValue}
                    >
                        <option value={appConst.sortDirectionTypes.asc.value}>{appConst.sortDirectionTypes.asc.name}</option>
                        <option value={appConst.sortDirectionTypes.desc.value}>{appConst.sortDirectionTypes.desc.name}</option>
                    </select>
                </div>
            </div>
        )
    }
}