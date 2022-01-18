'use strict';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import appConst from '../../constants/appConst';

// меню
export default class Menu extends PureComponent {

    constructor(props) {
        super(props);
    }

    // изменение типа отображения списка пользователей
	changeViewType = (event) => {
        const value = event.target.value;
        const viewType = appConst.viewTypes[`${value}`];
        this.props.changeViewType(viewType);
    }

    render() {
        const className = 'menu ' + (this.props.className ? this.props.className : '');
        const selectedViewTypeValue = this.props.viewType ? this.props.viewType.value : appConst.viewTypes[`${appConst.defaultViewType}`].value;
        
        return (
            <div className = {className}>
                <button className = ''>
                    <Link to={appConst.defaultLink}>
                        <div className='menu__main-button-inner'>Главная</div>
                    </Link>
                </button>

                <div className='menu__view-types'>
                    Показать список сотрудников в виде
                    <select
                        name="view-type"
                        className = "menu__select"
                        onChange = {this.changeViewType}
                        value = {selectedViewTypeValue}
                    >
                        <option value={appConst.viewTypes.table.value}>{appConst.viewTypes.table.name}</option>
                        <option value={appConst.viewTypes.cards.value}>{appConst.viewTypes.cards.name}</option>
                        <option value={appConst.viewTypes.tiles.value}>{appConst.viewTypes.tiles.name}</option>
                    </select>
                </div>

                <button onClick={this.props.changeColorTheme} className = 'menu__mode-button'>
                    {this.props.colorThemeTitle}
                </button>
            </div>
        )
    }
}