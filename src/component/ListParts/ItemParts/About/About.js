import React, { Component } from 'react';


class About extends Component {
  render() {
    let dataBody = this.props.bodyitem;
    let dataImg = this.props.imgitem;
    return (
        <span>
         <a className="btn btn-primary text-white" data-toggle="modal" data-target=".bd-example-modal-lg">Подробнее</a>
            <div className="modal fade bd-example-modal-lg"  role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                 <img src={dataImg} className="App-logo" alt="logo" />
                 <p className="mx-5"> {dataBody}</p>
                </div>
            </div>
            </div>
            </span>
    );
    
   
  }
}

export default About;