'use strict';

import React, { PureComponent } from 'react';
import appConst from '../../../constants/appConst';

// всплывающее окно
export default class PopupForm extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {
		let className = 'popup-form ' + (this.props.className ? this.props.className : '');
		
		if (this.props.colorTheme === appConst.colorThemes.night) {
			className += 'popup-form_night-mode';
		}
		else {
			className += 'popup-form_day-mode';
		}

		const style = {left: '40%'};

		return (
			<div className = {className} style={style}>
				{this.props.data || null}
			</div>
		)
	}
}