import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';
import bulldog from '../assets/Bulldog-Puppy.jpg';

export default class Hello extends Component {
    render() {
        return (
            <div>
                <h2>Hello from React</h2>
                <img class="thumbnail" src={ bulldog } alt="Cute Black French Bulldog puppy!" />
            </div>
        );
    }
}

render(<Hello />, document.getElementById('app'));
