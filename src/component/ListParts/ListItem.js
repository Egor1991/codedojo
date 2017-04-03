import React, { Component } from 'react';
import Item from './ItemParts/Item'
import DataParts from './Data'

class ListItem extends Component {

constructor(props){
  super(props);
  this.state = {displayItem: DataParts};

}
 handleSearch(event) {
    let searchQuery = event.target.value.toLowerCase();
    let displayedItems = DataParts.filter(function(el) {
    let searchValue = el.id + ' ' + el.name.toLowerCase();
    return searchValue.indexOf(searchQuery.trim()) !== -1;
    });
    this.setState({displayItem: displayedItems});
}
        
 render() { 

   let TemlplateList = this.state.displayItem.map(function(item,index){
     return (
        <Item key={index} iditem = {item.id} nameitem = {item.name} bodyitem = {item.body} imgitem = {item.img}/>
      );
   })

    return (
      <div className="col-lg-10">
        <input type="text"  placeholder="Search..." className="search-field" onChange={this.handleSearch.bind(this)} />
        <table  className="table table-hover">
          <thead className="thead-inverse">
            <th>#</th>
            <th>Наименование</th>
            <th>Наличие</th>
            <th></th>
            <th></th>
          </thead>
         <tbody>
              {TemlplateList}
          </tbody>
      </table>
      </div>
    );
   
  }
}

export default ListItem;