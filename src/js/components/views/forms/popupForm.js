'use strict';

import React, { PureComponent } from 'react';
import forumConst from '../../../constants/forumConst';

// всплывающее окно
export default class PopupForm extends PureComponent {

	constructor(props) {
		super(props);

		this.getStyle = this.getStyle.bind(this);
	}

	// получить координаты окна, приписанные в стиле
	getStyle() {
		let style = null;

		// окна редактирования и перемещения вызывается из окон, поэтому координата отсчитывается от родительского окна
		if (this.props.popupType !== forumConst.popupTypes.modifying &&
			this.props.popupType !== forumConst.popupTypes.moving) {
				const scrollTop = document.documentElement.scrollTop;
				const clientHeight = document.documentElement.clientHeight;

				// const scrollLeft = document.documentElement.scrollLeft;
				// const clientWidth = document.documentElement.clientWidth;

				debugger;
				const top = clientHeight/2 - 451 + scrollTop;
				// const left = clientWidth/2 - 270 + scrollLeft;
				style = {top: top, left: '35%'};
		}

		return style;
	}

	render() {
		debugger;
		let className = 'popup-form ' + (this.props.className ? this.props.className : '');
		
		if (this.props.colorTheme === forumConst.colorThemes.night) {
			className += 'popup-form_night-mode';
		}
		else {
			className += 'popup-form_day-mode';
		}

		const style = this.getStyle();
		// const style = {left: '30%'};

		return (
			<div className = {className} style={style}>
				{this.props.data || null}
			</div>
		)
	}
}