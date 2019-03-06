import React, { Component } from 'react';

import Loader from './components/Loader/Loader';
import Table from './components/Table/Table';
import { sortBy } from './custom-functions';

class App extends Component {

  state = {
    data: [],
    isLoading: false,
    sort: 'asc', // desc
    sortField: 'id'
  }

  async componentDidMount () {
    
    this.setState({isLoading: true})
    
    const response = await fetch(`http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`);
    const data = await response.json();
    const sortedData = sortBy(data, this.state.sortField, this.state.sort)

    this.setState({ 
      data: sortedData,
      isLoading: false
    })
  }

  onSort = sortField => {
  
    const clonedData = [...this.state.data];
    const sortType = this.state.sort === 'asc' ? 'desc' : 'asc';
     const sortedData = sortBy(clonedData, sortField, sortType);

    this.setState({
      data: sortedData,
      sort: sortType,
      sortField
    })
    
  }

  render() {
    const isLoading = this.state.isLoading;
    
    return (
      <div className="container">
        { 
          isLoading 
          ? <Loader />
          : <Table 
            data={this.state.data}
            onSort={this.onSort} 
            sort={this.state.sort}
            sortField={this.state.sortField}/>
        }
      </div>
    );
  }
}

export default App;
