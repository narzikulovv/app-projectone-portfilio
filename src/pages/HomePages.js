import React from 'react';
import Banner from "../Components/Banner";
import Kategoriya from "../Components/Kategoriya";
import Reklama from "../Components/Reklama";
import Tovar from "../Components/Tovar";
import Shivaki from "../Components/Shivaki";
import Online from "../Components/Online";

const HomePages = () => {



    return (
        <div>
            <Banner/>
            <Kategoriya/>
            <Reklama/>
            <Tovar/>
            <Shivaki/>
            <Online/>
        </div>
    );
};

export default HomePages;