import React from 'react';
import Banner from "../Components/Banner";
import Navbarr from "../Components/Navbarr";
import Kategoriya from "../Components/Kategoriya";
import Reklama from "../Components/Reklama";
import Tovar from "../Components/Tovar";
import Shivaki from "../Components/Shivaki";
import Online from "../Components/Online";
import Footer from "../Components/Footer";

const HomePages = (props) => {



    return (
        <div>
            <Navbarr/>
            <Banner/>
            <Kategoriya/>
            <Reklama/>
            <Tovar/>
            <Shivaki/>
            <Online/>
            <Footer/>
        </div>
    );
};

export default HomePages;