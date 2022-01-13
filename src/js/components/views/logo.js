'use strict';

import React, { PureComponent } from 'react';
import appConst from '../../constants/appConst';

// логотип
export default class Logo extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const className = 'logo ' + (this.props.className ? this.props.className : '');
        
        return (
            <div className = {className}>
                <a href={appConst.defaultLink}>
                    <img 
                        name = 'logo'
                        className = 'logo__img' 
                        src = '/images/trekking_logo.png' 
                        alt = 'Перейти на главную'
                        title = 'Перейти на главную'
                    >
                    </img>
                </a>
            </div>
        )
    }
}