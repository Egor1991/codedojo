import React, { Component } from 'react';
import Item from './ItemParts/Item'
import DataParts from './Data'

class ListItem extends Component {

constructor(props){
  super(props);
  this.state = {displayItem: DataParts};

}
handleSearch(event){
   let searchQuery = event.target.value.toLowerCase();
   if(typeof(searchQuery) === String){
   let displayedItem = DataParts.filter(function(el) {
   var searchValue = el.email.toLowerCase();
   return searchValue.indexOf(searchQuery) !== -1;
   
  });
  this.setState({displayItem: displayedItem});     
   }
   else {
    let displayedItem = DataParts.filter(function(el) {
   var searchValue = el.email.toLowerCase();
   return searchValue.indexOf(searchQuery) !== -1;
  });
  this.setState({displayItem: displayedItem});     
   }
           
}
 render() {  
    return (
      <div>
        <input type="text" placeholder="Search..." className="search-field" onChange={this.handleSearch.bind(this)} />
        <Item data={this.state.displayItem} />
      </div>
    );
   
  }
}

export default ListItem;