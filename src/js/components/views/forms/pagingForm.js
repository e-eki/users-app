'use strict';

import React, { PureComponent } from 'react';

// пагинация для списка
export default class PagingForm extends PureComponent {

    constructor(props) {
        super(props);
    }

    setPreviousPage = () => {
        debugger;
        const currentPage = this.props.currentPage - 1;
        this.props.setCurrentPage(currentPage);
    }

    setNextPage = () => {
        debugger;
        const currentPage = this.props.currentPage + 1;
        this.props.setCurrentPage(currentPage);
    }

    render() {
        const className = 'paging-form ' + (this.props.className ? this.props.className : '');
        
        debugger;
        const previousEnabled = this.props.currentPage > 1;
        const nextEnabled = this.props.currentPage < this.props.totalPages;
        
        return (
            <div className = {className}>
                <button onClick={this.setPreviousPage} disabled={!previousEnabled}>
                    Previous Page
                </button>
                <span className='paging-form__text'>
                    Current Page: {this.props.currentPage} of {this.props.totalPages}
                </span>
                <button onClick={this.setNextPage} disabled={!nextEnabled}>
                    Next Page
                </button>
            </div>
        )
    }
}