import React, { Component } from 'react';
import About from './About/About'

class Item extends Component {


 handleAbout(event){
  
   console.log(1);
  }
  render() {
    let DataID = this.props.iditem;
    let DataName = this.props.nameitem;
    let col = 10;
    return (
      <tr>
        <td>{DataID}</td>
        <td>{DataName}</td>
        <td align="left">{col}</td>
        <td><About bodyitem={this.props.bodyitem} imgitem ={this.props.imgitem}/></td>
        <td><a href="#" onClick = {this.handleAbout}>Купить</a></td>
      </tr> 
    );
    
   
  }
}

export default Item;