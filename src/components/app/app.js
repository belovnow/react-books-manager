import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import BooksList from '../books-list';
import BookAddForm from '../book-add-form';

import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        books:
            [
                this.createBook('Мы Замятин Е. И.'),
                this.createBook('1984 Джордж Оруел'),
            ],
        term: ''
    }

    createBook(title) {
        return {
            title,
            read: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({ books }) => {
            const idx = books.findIndex((el) => el.id === id);

            const before = books.slice(0, idx);
            const after = books.slice(idx + 1);

            const newArr = [...before, ...after];

            return {
                books: newArr
            }
        });
    };


    onToggleRead = (id) => {
        this.setState(({ books }) => {
            const idx = books.findIndex((el) => el.id === id);

            const oldItem = books[idx];
            const newItem = { ...oldItem, read: !oldItem.read };

            const newArr =
                [
                    ...books.slice(0, idx),
                    newItem,
                    ...books.slice(idx + 1)
                ];


            return {
                books: newArr
            }
        });
    }

    printOne = () => {
        console.log('One');
    }

    insertItem = (text) => {

        const newBook = this.createBook(text, 'Максим Горький');

        this.setState(({ books }) => {
            const newArr = [
                ...books,
                newBook
            ];

            return {
                books: newArr
            };
        });
    }

    render() {

        return (
            <div className="app">
                <AppHeader />
                <SearchPanel printOne={this.printOne} />
                <BooksList bookdata={this.state.books}
                    onDeleted={this.deleteItem}
                    onToggleRead={this.onToggleRead} />
                <BookAddForm
                    insertItem={this.insertItem} />
            </div>
        );

    };
};

