import React, { Component } from 'react';

import Loader from './components/Loader/Loader';
import Table from './components/Table/Table';

class App extends Component {

  state = {
    data: [],
    isLoading: false
  }

  async componentDidMount () {
    
    this.setState({isLoading: true})
    
    const response = await fetch(`http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`);
    const data = await response.json();
    
    this.setState({ 
      data,
      isLoading: false
    })
  }

  render() {
    const isLoading = this.state.isLoading;
    
    return (
      <div className="container">
        { 
          isLoading 
          ? <Loader />
          : <Table data={this.state.data} />
        }
      </div>
    );
  }
}

export default App;
