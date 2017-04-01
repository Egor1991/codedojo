import React, { Component } from 'react';


class Item extends Component {
  render() {
    let arrData = this.props.data;
    let TempalteData = arrData.map(function(item,index){
    
      return (
          <ul key={index} className ="inlineList">
            <li >{item.id}</li>
            <li >{item.name}</li>
            <li >{item.email}</li>
            <li >{item.body}</li>
          </ul>
       );
    });
    return (
      <div> {TempalteData}</div>
    );
        
   
  }
}

export default Item;