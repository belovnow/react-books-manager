import React, { Component } from 'react';

import './books-list-item.css';

export default class BooksListItem extends Component {

    render() {

        const { title, onDeleted, onToggleRead, read } = this.props;

        let labelClassName = 'books-list-item-label';
        let iconClassName = 'fa fa-';
        let checkButtonClassName = 'btn btn-outline-dark btn-sm'

        if (read) {
            labelClassName += ' read';
            iconClassName += 'undo';
            checkButtonClassName += ' disabled';
        } 
        else {
            iconClassName += 'check';
        }

        return (
            <div className="books-list-item">
                <button type="button" className={checkButtonClassName}
                    onClick={onToggleRead}>
                    <i className={iconClassName} />
                </button>
                
                <span className={labelClassName}>
                    {title}
                </span>

                <button type="button" className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}>
                    <i className="fa fa-minus"></i>
                </button>

            </div>
        );
    }
}