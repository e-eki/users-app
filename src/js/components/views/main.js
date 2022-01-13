'use strict';

import React, { PureComponent } from 'react';

// главная страница приложения
export default class Main extends PureComponent {

    constructor(props) {
        super(props);
    }
    
    render() {
        const className = 'main ' + (this.props.className ? this.props.className : '');

        debugger;
        
        return (
            <div className = {className}>
                111111

                {/* <ListForm
                    canAdd = {this.props.canAdd}
                    type = {forumConst.itemTypes.section}
                    items = {sections}
                    currentInfoItem = {this.props.currentInfoSection}
                    setCurrentInfoItem = {this.props.setCurrentInfoSection}
                    modifiableItem = {this.props.modifiableSection}
                    movingItem = {this.props.movingSection}
                    setModifiableItem = {this.props.setModifiableSection}
                    setMovingItem = {this.props.setMovingSection}
                    modifyItem = {this.props.modifySection}
                    deleteItem = {this.props.deleteSection}

                    parentItemsList = {this.props.parentItemsList}
                    resetParentItemsList = {this.props.resetParentItemsList}

                    colorTheme = {this.props.colorTheme}
                /> */}
            </div>
        )
    }
}