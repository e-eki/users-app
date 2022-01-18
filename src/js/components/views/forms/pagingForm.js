'use strict';

import React, { PureComponent } from 'react';

// пагинация для списка
export default class PagingForm extends PureComponent {

    constructor(props) {
        super(props);
    }

    // перейти к предыдущей странице
    setPreviousPage = () => {
        const currentPage = this.props.currentPage - 1;
        this.props.setCurrentPage(currentPage);
    }

    // перейти к следующей странице
    setNextPage = () => {
        const currentPage = this.props.currentPage + 1;
        this.props.setCurrentPage(currentPage);
    }

    render() {
        const className = 'paging-form ' + (this.props.className ? this.props.className : '');
        
        const previousEnabled = this.props.currentPage > 1;
        const nextEnabled = this.props.currentPage < this.props.totalPages;
        
        return (
            <div className = {className}>
                <button className={previousEnabled ? '' : 'paging-form_disabled'} onClick={this.setPreviousPage} disabled={!previousEnabled}>
                    Previous Page
                </button>
                <span className='paging-form__text'>
                    Current Page: {this.props.currentPage} of {this.props.totalPages}
                </span>
                <button className={nextEnabled ? '' : 'paging-form_disabled'} onClick={this.setNextPage} disabled={!nextEnabled}>
                    Next Page
                </button>
            </div>
        )
    }
}