import React from 'react';
import button from 'bootstrap';

class Boton extends React.Component {
  render(){
    return (
        <div>
            <button type="button" class="btn btn-primary active">{this.props.relleno}</button>
        </div>
    );
  }  
}

export default Boton;