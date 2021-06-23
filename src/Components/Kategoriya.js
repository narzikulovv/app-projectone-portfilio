import React from 'react';


import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';



const Kategoriya = () => {





    return (
        <div className="gradiend container-fluid">

            <div className="container con">
                <div className="row rov">
                    <div className="col-12 katagoriya ">
                        <div className="container d-flex align-items-center justify-content-between write" >
                            <h2>Категории</h2>
                            <a href="#!" className="nav-link text-dark pasmatrit">
                                Посмотреть все <img src="./images/right_arrow.svg" alt=""/></a>
                            <a href="#!" className="nav-link text-dark vse">Все<img src="./images/right_arrow.svg" alt=""/></a>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 px-0 mb-2 py-0 dazmol h-100">
                       <div className="h-100 w-100 " id="lightgallery">
                           <a href="images/dazmol.png" data-lg-size="1600-2400"><img src="./images/dazmol.png"className="w-100 h-100" alt=""/></a>
                           <div className="write">
                               <h5>Мелкая бытовая <br/>
                                   техника</h5>
                           </div>
                       </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 px-0  col-md-6 rasmlar h-100">
                        <div className="container rasmlar_container">
                            <div className="row mb rasmlar_row">
                                <div className="col-6   rasmlar_col">
                                   <div className="col-rasm" id="lightgallery">
                                       <a href="images/telefon.png" data-lg-size="1600-2400"><img src="./images/telefon.png" alt=""/></a>
                                       <div className="write2">
                                           <h5>Телефоны</h5>
                                       </div>
                                   </div>
                                </div>
                                <div className="col-6  rasmlar_col">
                                    <div className="col-rasm" id="lightgallery">
                                        <a href="images/tv.png" data-lg-size="1600-2400"><img src="./images/tv.png" alt=""/></a>
                                        <div className="write2">
                                            <h5>Телевизоры</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row  rasmlar_row ">
                                <div className="col-6  rasmlar_col">
                                    <div className="col-rasm" id="lightgallery">
                                        <a href="images/pech.png" data-lg-size="1600-2400"><img src="./images/pech.png" alt=""/></a>
                                        <div className="write2">
                                            <h5>Печи</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6  rasmlar_col">
                                    <div className="col-rasm" id="lightgallery">
                                        <a href="images/muzlatgich.png" data-lg-size="1600-2400"><img src="./images/muzlatgich.png" alt=""/></a>
                                        <div className="write2">
                                            <h5>Холодильники</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center batafsil">
                        <button type="button" className="btn btn-success">Еще</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Kategoriya;