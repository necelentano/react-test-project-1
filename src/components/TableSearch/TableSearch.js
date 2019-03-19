import React, { Component } from 'react';

export default class TableSearch extends Component {

    state = {
        value: ''
    }

    onChangeHandler = e => {
        this.setState({value: e.target.value})
    }

    render() {
        return (
            <div className="input-group mb-3 mt-3">
                <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" onClick={() => this.props.onSearch(this.state.value)}>Search</button>
                </div>
                <input type="text" className="form-control" value={this.state.value} onChange={this.onChangeHandler}/>
            </div>
        )
    }
}