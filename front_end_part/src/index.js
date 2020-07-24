import React from 'react';
import"../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import '../src/index.css';

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')

)