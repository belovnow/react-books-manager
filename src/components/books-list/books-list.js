import React from 'react';

import BooksListItem from '../books-list-item';
import './books-list.css';

const BooksList = ({ bookdata, onDeleted, onToggleRead }) => {
    
    const elements = bookdata.map((item) => {

        const {id, ...itemProps} = item;


        return (
            <li key={id} className="list-group-item">
                <BooksListItem 
                {...itemProps} 
                onDeleted={() => onDeleted(id)} 
                onToggleRead={() => onToggleRead(id)} />
            </li>
        );
    });

    return (
        <ul className="list-group list-group-flush">
            {elements}
        </ul>
    );
};

export default BooksList;