import React  from 'react';
import Slider from "react-slick";

const Shivaki = () => {


    return (
        <div className="container shivaki">
            <div className="row shivaki_row">
                <div className="col-12 shivaki_col">
                    <div className="container shivaki_container d-flex align-items-center justify-content-between write">
                        <h2>Наши партнеры</h2>
                        <a href="#!" className="nav-link text-dark pasmatrit">
                            Подробнее <img src="./images/right_arrow.svg" alt=""/></a>
                    </div>
                </div>
                <div className="col-12 companiya">
                    <div className="row samsung ">
                        <div className="container samsung_container ">
                            <div className="row samsung_row justify-content-between d-flex align-items-center">
                                <div className="col-lg-3 samsung_col col-md-6 col-sm-12 col-12">
                                    <img src="images/shivaki.png"  alt=""/>
                                </div>
                                <div className="col-lg-3 samsung_col col-md-6 col-sm-12 col-12">
                                    <img src="images/samsung.png"  alt=""/>
                                </div>
                                <div className="col-lg-3 samsung_col col-md-6 col-sm-12 col-12 d-flex ">
                                    <img src="images/avalon.png"  className="ml-3" alt=""/>
                                </div>
                                <div className="col-lg-3 samsung_col col-md-6 col-sm-12 col-12 d-flex justify-content-end">
                                    <img src="images/royal.png"  alt=""/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Shivaki;