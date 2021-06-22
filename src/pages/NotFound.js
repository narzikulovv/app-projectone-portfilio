import React from 'react';
import {Link} from "react-router-dom"

const NotFound = () => {
    return (
        <div className="container text-center mt-5">
            <img src="/images/404.png" width="60%" alt=""/>
            <h4>Bunday sahifa mavjud emas!</h4>
            <Link to="/home" className="maxsus"><h5 className="maxsus">Bosh sahifaga o'tish</h5></Link>
        </div>
    );
};

export default NotFound;