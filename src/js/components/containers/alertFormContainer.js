'use strict';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import AlertForm from '../views/forms/alertForm';
import { setAlertData } from '../../actions/alertDataActions';

// контейнер для формы с оповещениями для юзера
class AlertFormContainer extends PureComponent {

    constructor(props) {
        super(props);
    }
    
    render() {
        const alertForm = this.props.alertData
                            ?
                            <AlertForm
                                colorTheme = {this.props.colorTheme}
                                
                                alertData = {this.props.alertData}
                                resetAlertData = {this.props.resetAlertData}
                            />
                            :
                            null;

        return (
            <div className = "popup-form__wrapper">{alertForm}</div>
        );
    }
}

const mapStateToProps = function(store) {
    return {
        alertData: store.alertDataState.get('alertData'),
        colorTheme: store.forumDesignState.get('colorTheme'),
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        resetAlertData: function() {
            dispatch(setAlertData(null));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertFormContainer);