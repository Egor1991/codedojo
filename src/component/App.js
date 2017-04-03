import React, { Component } from 'react';
import ListItem from './ListParts/ListItem'
import TreeList from './TreeList/TreeList'
class App extends Component {
  render() {
    return (
      <div className="row">
          <TreeList className="row col-lg-3"/>
          <ListItem />
          
      </div>
    );
  }
}

export default App;
