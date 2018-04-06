import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App';
import ProjectList from './ProjectList';

import { injectGlobal } from 'styled-components';

injectGlobal`

html,body { 
    box-sizing: border-box;
    
    margin: 0;
    padding: 0;
    font-family: arial;
    font-size: 62.5%;
}

`

ReactDOM.render(
<Router>  
    <div>
      <Route exact path="/" component={App} />
    </div> 
  </Router> 
, document.getElementById('root'));

