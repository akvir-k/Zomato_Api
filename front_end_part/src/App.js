import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Search from './component/Search';
import ByName from './component/SearchByName';
import Nav from './component/Navba';

const App=()=>{
    return(
        <>
            <Nav/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/Search' component={Search}/>
                <Route exact path='/ByName' component={ByName}/>
            </Switch>
        </>
    );

};

export default App;
