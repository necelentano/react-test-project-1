import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

import ModeSelector from './components/ModeSelector/ModeSelector';
import Loader from './components/Loader/Loader';
import Table from './components/Table/Table';
import Details from './components/Details/Details';
import { sortBy } from './custom-functions';

class App extends Component {

  state = {
    data: [],
    isLoading: false,
    isModeSelected: false,
    sort: 'asc', // desc
    sortField: 'id',
    row: null,
    currentPage: 0
  }

  async fetchData (url) {
    
    const response = await fetch(url);
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

  onRowSelect = row => {
    this.setState({row})
  }

  modeSelectHandler = (url) => {
    this.setState({
      isModeSelected: true,
      isLoading: true
    });

    this.fetchData(url);
  }

  handlePageClick = ({selected}) => {
    this.setState({currentPage: selected})
  }

  render() {
    const {isLoading, isModeSelected} = this.state;
    const pages = 50;

    if (!isModeSelected) {
      return (
        <div className="container">
          <ModeSelector modeSelectHandler={this.modeSelectHandler}/>
        </div>
      )
    }
    
    return (
      <div className="container">
        { 
          isLoading 
          ? <Loader />
          : <Table 
            data={this.state.data}
            onSort={this.onSort} 
            sort={this.state.sort}
            sortField={this.state.sortField}
            onRowSelect={this.onRowSelect}/>
        }
        {
          this.state.data.length > pages
            ? <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={20}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                nextClassName="page-item"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
              /> : null
        }
        {
          this.state.row
          ? <Details person={this.state.row}/>
          : null
        }
      </div>
    );
  }
}

export default App;
