import React, { Component } from 'react';
import classie from 'classie';
var hidden;

class detailPublic extends Component {

    componentWillMount() {
        hidden = document.getElementById('hidenLogin');
        classie.add(hidden, 'hidenLogin');
    }


    render() {
        return (
            <div>
              <p>Lista de Productos</p>
            </div>

        );
    }
}

export default detailPublic;