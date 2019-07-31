import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Accordion from './state-drills/Accordion';
import store from './state-drills/store';


ReactDOM.render(<Accordion sections={store.sections} />, document.getElementById('root'));

