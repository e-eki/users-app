'use strict';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

// форма с оповещениями для юзера
export default class AlertForm extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {
		const className = 'alert-form ' + (this.props.className ? this.props.className : '');

		let alertBlock = <div></div>;

		if (this.props.alertData) {
			const alertInfo = <div>
									<div className = 'popup-form__item'>
										{this.props.alertData.message || 'something happened'}
									</div>

									<div className = 'popup-form__buttons-block'>
										<button className = '' >
											Ok
										</button>
									</div>
								</div>;

			alertBlock = <Link to = {this.props.alertData.link}>
				{alertInfo}	
			</Link>
		}

		const data = <div className = {className} onClick = {this.props.resetAlertData}>
						{alertBlock}
					</div>;  //todo!

		return (
			// <PopupForm
            //     data = {data}
			// 	colorTheme = {this.props.colorTheme}
			// 	popupType = {forumConst.popupTypes.alert}
            // />
			<div>22222</div>
		)
	}
}