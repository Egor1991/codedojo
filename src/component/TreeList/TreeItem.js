import React, { Component } from 'react';


class TreeItem extends Component {
  render() {
   let data = this.props.data;
    return (
    
          <li>{data}
              </li>
        
    );
        
   
  }
}

export default TreeItem;