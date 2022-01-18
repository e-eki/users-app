'use strict';

import React, { PureComponent } from 'react';
import PopupForm from './popupForm';
import appConst from '../../../constants/appConst';

// форма с оповещениями для юзера
export default class AlertForm extends PureComponent {

	constructor(props) {
		super(props);
	}

	// получить элемент с оповещением для юзера
	getAlertBlock = () => {
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

		return alertBlock;
	}

	render() {
		const className = 'alert-form ' + (this.props.className ? this.props.className : '');

		const alertBlock = this.getAlertBlock();
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