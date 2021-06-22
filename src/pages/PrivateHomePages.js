import React from 'react';
import NotFound from "./NotFound";
import {Route} from "react-router-dom";


const PrivateHomePages = (props) => {
    return localStorage.getItem("logget") ?
        <Route path={props.path} exact={props.exact} component={props.component} /> :
        <Route component={NotFound}/>
};

export default PrivateHomePages;