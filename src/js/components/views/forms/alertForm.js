'use strict';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PopupForm from './popupForm';
import appConst from '../../../constants/appConst';

// форма с оповещениями для юзера
export default class AlertForm extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {
		const className = 'alert-form ' + (this.props.className ? this.props.className : '');

		let alertBlock = <div></div>;

		if (this.props.alertData) {
			alertBlock = <div>
							<div className = 'popup-form__item'>
								{this.props.alertData.message || 'something happened'}
							</div>

							<div className = 'popup-form__buttons-block'>
								<button className = '' >
									Ok
								</button>
							</div>
						</div>;
		}

		const data = <div className = {className} onClick = {this.props.resetAlertData}>
						{alertBlock}
					</div>;

		return (
			<PopupForm
                data = {data}
				colorTheme = {this.props.colorTheme}
				popupType = {appConst.popupTypes.alert}
            />
		)
	}
}