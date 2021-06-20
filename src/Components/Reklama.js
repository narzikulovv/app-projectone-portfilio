import React from 'react';

const Reklama = () => {
    return (
        <div className="container-fluid reklama__bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="card">
                            <div className="card__img">
                                <img src="./images/medal.svg" alt="Eror" />
                            </div>
                            <h4>
                            Самый крупный производитель в Средней Азии
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="card">
                            <div className="card__img">
                                <img src="./images/moshina.svg" alt="Eror" />
                            </div>
                            <h4>
                            Бесплатная доставка по Узбекистану
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="card">
                            <div className="card__img">
                                <img src="./images/contact.svg" alt="Eror" />
                            </div>
                            <h4>
                            3 года гарантии и бесплатного обслуживания 
                            </h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="card">
                            <div className="card__img">
                                <img src="./images/naushnik.svg" alt="Eror" />
                            </div>
                            <h4>
                            Круглосуточная техническая поддержка
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Reklama;