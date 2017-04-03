import React, { Component } from 'react';
import TreeItem from './TreeItem';

class TreeList extends Component {
  render() {
      
   let TemlplateTree = TreeItemS.map(function(item,index){
     return (
        <TreeItem key={index} data={item} />
      );
    });
    return (
          <ul className="col-lg-2">
           {TemlplateTree }
          </ul>
    );
        
   
  }
}

export default TreeList;

let TreeItemS = [
    'Подвеска и рулевое управление',
    'Детали сцепления',
    'Детали двигателя',
    'Детали ГРМ'
];