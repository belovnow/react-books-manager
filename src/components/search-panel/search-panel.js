import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        searchLabel: ''
    }

    onSearchLabelChange = () => {
        this.props.printOne();
    }

    render() {
        return (
            <div className="form-group search-input">
                <input type="text"
                    className="form-control"
                    placeholder="Поиск по книгам"
                    onChange={this.onSearchLabelChange}>
                </input>
            </div>
        );

    }

}