import React from 'react';
import {FiPhone} from 'react-icons/fi';
const Online = () => {
    return (
        <div className="container-fluid online__bg">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-5 d-flex justify-content-center">
                  <button type="button" className="btn py-2 online__call">
                   <FiPhone/>
                    <span>Онлайн консультация</span>
                   </button>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-5 d-flex justify-content-center">
                  <button type="button" className="btn online__medal">
                    <img src="./images/star-mdeal.svg" alt="Eror" />
                   <span> Подписаться на акции</span>
                   </button>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default Online;