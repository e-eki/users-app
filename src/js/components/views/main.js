'use strict';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import appConst from '../../constants/appConst';

// главная страница приложения
export default class Main extends PureComponent {

    constructor(props) {
        super(props);
    }
    
    render() {
        const className = 'main ' + (this.props.className ? this.props.className : '');
        
        return (
            <div className = {className}>
                <div className='main__text'>
                    Доброго времени суток!
                </div>
                <div className='main__text'>
                    Вы находитесь на главной странице веб-приложения для управления списком сотрудников компании N.
                </div>
                <div className='main__text'>
                    Здесь вы можете просмотреть и отредактировать список сотрудников и групп сотрудников.
                </div>
                <div className='main__text'>
                    <Link to={appConst.usersLink}>
                        Перейти к списку сотрудников
                    </Link> 
                </div>
                
            </div>
        )
    }
}