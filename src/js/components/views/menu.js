'use strict';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import appConst from '../../constants/appConst';

// меню
export default class Menu extends PureComponent {

    constructor(props) {
        super(props);

        this.changeViewType = this.changeViewType.bind(this);
    }

	changeViewType(event) {
        debugger;
        const value = event.target.value;
        this.props.changeViewType(value);
    }

    render() {
        debugger;
        const className = 'menu ' + (this.props.className ? this.props.className : '');
        
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
                        value = {this.props.viewType}
                    >
                        <option value={appConst.viewTypes.table}>{appConst.viewTypes.table}</option>
                        <option value={appConst.viewTypes.cards}>{appConst.viewTypes.cards}</option>
                        <option value={appConst.viewTypes.tiles}>{appConst.viewTypes.tiles}</option>
                    </select>
                </div>

                <button onClick={this.props.changeColorTheme} className = 'menu__mode-button'>
                    {this.props.colorThemeTitle}
                </button>
            </div>
        )
    }
}