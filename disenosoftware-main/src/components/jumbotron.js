import React from 'react';


class Jumbotron extends React.Component {
  render(){
    return (
        <div class="container-fluid">
            <div class="mt-4 p-5 bg-primary text-white rounded">
                <h1>{this.props.Name}</h1> 
                <p>{this.props.Cuerpo}</p> 
            </div>
            </div>

    );
  }  
}

export default Jumbotron;