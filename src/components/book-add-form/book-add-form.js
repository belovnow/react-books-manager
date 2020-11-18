import React, { Component } from 'react';

import './book-add-form.css';

export default class BookAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.insertItem(this.state.label);
        this.setState({
            label: ''
        });
    }

    render() {
        return (
            <form className="item-add-form d-flex"
                onSubmit={this.onSubmit} >

                <input type="text"
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder="Название книги" 
                    value={this.state.label} />
                <button type="button" className="btn btn-primary btn-sm">
                    <i className="fa fa-plus"></i>
                </button>
            </form>
        );
    };
};