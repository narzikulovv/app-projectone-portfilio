import React, {Component} from 'react';
import Slider from 'react-slick';


const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className="container-fluid banner__bg">
            {/* ////////desktop uchun///////// */}
            <div className="container desktop">
                <Slider {...settings}>
                    <div className=" row banner__content d-flex">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 banner__left">
                            <h1>Эффектный просмотр </h1>
                            <p>Полное погружение с телевизорами Artel 8K</p>
                            <div className="row banner__left__footer">
                                <div className="col-12 d-flex banner__desktop__footer">
                                    <button type="button" className="btn btn-success mr-5">Купить онлайн</button>
                                    <button type="button" className="btn btn-light d-flex align-items-center">Узнать
                                        больше <img src="./images/right_arrow.svg" className="ml-3" alt="Eror"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 bannar__right ">
                            <div className="w-100 h-100">
                                <img src="./images/banner.png" className="w-100 h-100" alt="Eror"/>
                            </div>
                        </div>
                    </div>
                    <div className=" row banner__content d-flex">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 banner__left">
                            <h1>Эффектный просмотр </h1>
                            <p>Полное погружение с телевизорами Artel 8K</p>
                            <div className="row banner__left__footer">
                                <div className="col-12 d-flex">
                                    <button type="button" className="btn btn-success mr-5">Купить онлайн</button>
                                    <button type="button" className="btn btn-light d-flex align-items-center">Узнать
                                        больше <img src="./images/right_arrow.svg" className="ml-3" alt="Eror"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 col-12 ">
                            <div className="w-100 h-100">
                                <img src="./images/banner.png" className="w-100 h-100" alt="Eror"/>
                            </div>
                        </div>
                    </div>
                    <div className=" row banner__content d-flex">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 banner__left">
                            <h1>Эффектный просмотр </h1>
                            <p>Полное погружение с телевизорами Artel 8K</p>
                            <div className="row banner__left__footer">
                                <div className="col-12 d-flex">
                                    <button type="button" className="btn btn-success mr-5">Купить онлайн</button>
                                    <button type="button" className="btn btn-light d-flex align-items-center">Узнать
                                        больше <img src="./images/right_arrow.svg" className="ml-3" alt="Eror"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 col-12 ">
                            <div className="w-100 h-100">
                                <img src="./images/banner.png" className="w-100 h-100" alt="Eror"/>
                            </div>
                        </div>
                    </div>
                    <div className=" row banner__content d-flex">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 banner__left">
                            <h1>Эффектный просмотр </h1>
                            <p>Полное погружение с телевизорами Artel 8K</p>
                            <div className="row banner__left__footer">
                                <div className="col-12 d-flex">
                                    <button type="button" className="btn btn-success mr-5">Купить онлайн</button>
                                    <button type="button" className="btn btn-light d-flex align-items-center">Узнать
                                        больше <img src="./images/right_arrow.svg" className="ml-3" alt="Eror"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 col-12 ">
                            <div className="w-100 h-100">
                                <img src="./images/banner.png" className="w-100 h-100" alt="Eror"/>
                            </div>
                        </div>
                    </div>


                </Slider>
            </div>

            {/* //////////mobile uchun ////////// */}
            <div className="container mobile">
                <Slider {...settings}>

                    {/* //////////1-rasm /////////*/}
                    <div className=" row banner__content__mobile d-flex">

                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 banner__mobile">
                            <div className="w-100 h-100">
                                <img src="./images/banner.png" className="w-100 h-100" alt="Eror"/>
                            </div>
                        </div>
                    </div>
                    {/* //////////2-rasm/////////// */}
                    <div className=" row banner__content__mobile d-flex">

                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 banner__mobile ">
                            <div className="w-100 h-100">
                                <img src="./images/banner.png" className="w-100 h-100" alt="Eror"/>
                            </div>
                        </div>
                    </div>
                    {/* ///////////////3-rasm//////////// */}
                    <div className=" row banner__content__mobile d-flex">

                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 banner__mobile">
                            <div className="w-100 h-100">
                                <img src="./images/banner.png" className="w-100 h-100" alt="Eror"/>
                            </div>
                        </div>
                    </div>
                </Slider>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 banner__mobile__footer">
                    <h1>Эффектный просмотр </h1>
                    <p>Полное погружение с телевизорами Artel 8K</p>
                    <div className="row banner__left__footer">
                        <div className="col-12 d-flex mobile__btn">
                            <button type="button" className="btn btn-success btn__one">Купить онлайн</button>
                            <button type="button" className="btn btn-light d-flex align-items-center btn__two">Узнать
                                больше <img src="./images/right_arrow.svg" className="ml-3" alt="Eror"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;