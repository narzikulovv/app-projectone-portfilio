import React from 'react';
import {BsHeart} from 'react-icons/bs';
import {AiOutlineShoppingCart} from 'react-icons/ai';
const Tovar = () => {
    return (
        <div className="container-fluid tovar__bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mb-5 tovar__content">
                        <h1>Популярные товары</h1>
                        <button type="button" className="btn btn-light see__btn"><span className="not__found"> Посмотреть</span> все <img src="./images/right_arrow.svg" className="ml-2" alt="" /></button>
                    </div>
                     {/* //////////CARD-1 */}
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="card">
                            <div className="card-body">
                                <img src="./images/card-img1.png" className="w-100" alt="" />
                                <h6>
                                Микроволновая печь Artel 23MX39
                                </h6>
                                <div className="star">
                                    <div className="star__content">
                                        <span><img src="./images/star.svg" alt="" /></span>
                                        <span><img src="./images/star.svg" alt="" /></span>
                                        <span><img src="./images/star.svg" alt="" /></span>
                                        <span><img src="./images/star.svg" alt="" /></span>
                                        <span><img src="./images/star.svg" alt="" /></span>
                                    </div>
                                     <a className="answer d-block" href="#!">Отзывы</a>
                                </div>
                                <h4>
                                1 500 000 сум
                                </h4>
                                <div className="card__footer">
                                    <div className="heart">
                                        <button type="button" className="btn">
                                        <BsHeart></BsHeart>
                                        </button>
                                        <div className="line"></div>
                                         <button type="button" className="btn tarozi"><img src="./images/tarozi.svg" alt="Eror" /></button>
                                    </div>
                                   <button type="button" className="btn basket">
                                   <AiOutlineShoppingCart></AiOutlineShoppingCart>
                                   </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ///////////CARD-2 */}
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="card">
                            <div className="card-body">
                                <img src="./images/card-img2.png" className="w-100" alt="" />
                                <h6>
                                Электрический чайный набор ART-TM-168
                                </h6>
                                <div className="star">
                                    <div className="star__content">
                                        <span><img src="./images/star.svg" alt="" /></span>
                                        <span><img src="./images/star.svg" alt="" /></span>
                                        <span><img src="./images/star.svg" alt="" /></span>
                                        <span><img src="./images/star.svg" alt="" /></span>
                                        <span><img src="./images/star.svg" alt="" /></span>
                                    </div>
                                     <a className="answer d-block" href="#!">Отзывы</a>
                                </div>
                                <h4>
                                300 000 сум
                                </h4>
                                <div className="card__footer">
                                    <div className="heart">
                                        <button type="button" className="btn">
                                        <BsHeart></BsHeart>
                                        </button>
                                        <div className="line"></div>
                                         <button type="button" className="btn tarozi"><img src="./images/tarozi.svg" alt="Eror" /></button>
                                    </div>
                                   <button type="button" className="btn basket">
                                   <AiOutlineShoppingCart></AiOutlineShoppingCart>
                                   </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ////////////CARD-3 */}
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="card">
                            <div className="card-body">
                                <img src="./images/card-img3.png" className="w-100" alt="" />
                                <h6>
                                Artel TV UA75H3502 (190 см) Android
                                </h6>
                                <div className="star">
                                    <div className="star__content">
                                        <span><img src="./images/star.svg" alt="" /></span>
                                        <span><img src="./images/star.svg" alt="" /></span>
                                        <span><img src="./images/star.svg" alt="" /></span>
                                        <span><img src="./images/star.svg" alt="" /></span>
                                        <span><img src="./images/star.svg" alt="" /></span>
                                    </div>
                                     <a className="answer d-block" href="#!">Отзывы</a>
                                </div>
                                <h4>
                                3 000 000 сум
                                </h4>
                                <div className="card__footer">
                                    <div className="heart">
                                        <button type="button" className="btn">
                                        <BsHeart></BsHeart>
                                        </button>
                                        <div className="line"></div>
                                         <button type="button" className="btn tarozi"><img src="./images/tarozi.svg" alt="Eror" /></button>
                                    </div>
                                   <button type="button" className="btn basket">
                                   <AiOutlineShoppingCart></AiOutlineShoppingCart>
                                   </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //////////CARD-4 */}
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="card">
                            <div className="card-body">
                                <img src="./images/card-img4.png" className="w-100" alt="" />
                                <h6>
                                Автоматическая стиральная машина Artel 60C101-I-WH
                                </h6>
                                <div className="star">
                                    <div className="star__content">
                                        <span><img src="./images/star.svg" alt="" /></span>
                                        <span><img src="./images/star.svg" alt="" /></span>
                                        <span><img src="./images/star.svg" alt="" /></span>
                                        <span><img src="./images/star.svg" alt="" /></span>
                                        <span><img src="./images/star.svg" alt="" /></span>
                                    </div>
                                     <a className="answer d-block" href="#!">Отзывы</a>
                                </div>
                                <h4>
                                6 000 000 сум
                                </h4>
                                <div className="card__footer">
                                    <div className="heart">
                                        <button type="button" className="btn">
                                        <BsHeart></BsHeart>
                                        </button>
                                        <div className="line"></div>
                                         <button type="button" className="btn tarozi"><img src="./images/tarozi.svg" alt="Eror" /></button>
                                    </div>
                                   <button type="button" className="btn basket">
                                   <AiOutlineShoppingCart></AiOutlineShoppingCart>
                                   </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 d-flex align-items-center justify-content-center">
                        <button type="button" className="btn btn-success mt-3 mb-5 px-4 py-2">Купить онлайн</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tovar;