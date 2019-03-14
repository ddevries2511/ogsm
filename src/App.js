import React, { Component } from 'react';
import './App.css';
import GridWrapper from './components/Grid/GridWrapper';
import GridItem from './components/Grid/GridItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GridWrapper>
          <GridItem />
        </GridWrapper>
        <GridWrapper>
          <GridWrapper width="4">
            <GridItem />
          </GridWrapper>
          <GridWrapper width="7">
            <GridItem />
            <GridItem />
            <GridItem />
          </GridWrapper>
        </GridWrapper>
      </div>
    );
  }
}

export default App;
