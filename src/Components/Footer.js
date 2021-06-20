import React from 'react';

const Footer = () => {
    return (
        <div className="container footer_container">
            <div className="row footer_row">


                <div className="col-lg-8 col-md-8 col-sm-12 col-12 footer_col">
                    <div className="row footer_row2">
                        <div className="col-lg-4  col-md-6 col-sm-6 col-6 footer_col2">
                            <a href="#!" className="footerLink">О компании</a>
                            <ul className="navbar-nav footer_navbarNav nav">
                                <li className="nav-item footer_navItem"><a href="#!" className="nav-link footer_navLink">Гарантии качества</a></li>
                                <li className="nav-item footer_navItem"><a href="#!" className="nav-link footer_navLink">Адреса и контакты</a></li>
                                <li className="nav-item footer_navItem"><a href="#!" className="nav-link footer_navLink">Производство</a></li>
                                <li className="nav-item footer_navItem"><a href="#!" className="nav-link footer_navLink">Принципы </a></li>
                                <li className="nav-item footer_navItem"><a href="#!" className="nav-link footer_navLink">Новости</a></li>
                                <li className="nav-item footer_navItem"><a href="#!" className="nav-link footer_navLink">Медиа</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-6 footer_col2">
                            <a href="#!" className="footerLink">Продукция партнеров</a>
                            <ul className="navbar-nav footer_navbarNav nav">
                                <li className="nav-item footer_navItem"><a href="#!" className="nav-link footer_navLink">Shivaki</a></li>
                                <li className="nav-item footer_navItem"><a href="#!" className="nav-link footer_navLink">Samsung</a></li>
                                <li className="nav-item footer_navItem"><a href="#!" className="nav-link footer_navLink">Avalon</a></li>
                                <li className="nav-item footer_navItem"><a href="#!" className="nav-link footer_navLink">Royal</a></li>
                                <li className="nav-item footer_navItem"><a href="#!" className="nav-link footer_navLink">Вакансии</a></li>
                                <li className="nav-item footer_navItem"><a href="#!" className="nav-link footer_navLink">Онлайн CV</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12 footer_col2">
                            <a href="#!" className="footerLink">Все категории</a>
                            <ul className="navbar-nav footer_navbarNav nav">
                                <li className="nav-item footer_navItem"><a href="#!" className="nav-link footer_navLink">Мелакая бытовая техника</a></li>
                                <li className="nav-item footer_navItem"><a href="#!" className="nav-link footer_navLink">Телефоны</a></li>
                                <li className="nav-item footer_navItem"><a href="#!" className="nav-link footer_navLink">Телевизоры</a></li>
                                <li className="nav-item footer_navItem"><a href="#!" className="nav-link footer_navLink">Печи </a></li>
                                <li className="nav-item footer_navItem"><a href="#!" className="nav-link footer_navLink">Пылесосы</a></li>
                                <li className="nav-item footer_navItem"><a href="#!" className="nav-link footer_navLink">Плиты</a></li>
                            </ul>
                        </div>
                    </div>

                    <p className="footer_p">Информация на сайте предоставлена исключительно для предварительного ознакомления.
                        Производитель оставляет за собой право на внесение изменений в конструкцию, комплектацию и дизайн приборов.
                        Комплектация и дизайн товара могут также варьироваться в зависимости от модели, страны поставки и предпочтений заказчика.  </p>

                </div>



                <div className="col-lg-4 col-md-4 col-sm-12 col-12 footer_col4">
                    <div className="card footer_card">
                        <div className="footer_skachat justify-content-start d-flex align-items-center">
                            <div className="footer_rasm">
                                <img src="images/qr-kode.png" alt=""/>
                            </div>
                            <h1>Скачать
                                приложение Artel</h1>
                        </div>

                        <div className="footer_app ml-2 justify-content-between align-items-center d-flex">
                            <a href="https://apple.com" target="_blank"><img src="images/app-store.png" alt=""/></a>
                            <a href="https://play.google.com" target="_blank"><img src="images/google-play.png" alt=""/></a>
                        </div>

                        <div className="footer-social d-flex w-100  align-items-center">
                            <a href="#!"><img src="images/facebook.svg" alt=""/></a>
                            <a href="#!"><img src="images/instagram.svg" alt=""/></a>
                            <a href="#!"><img src="images/telegram.svg" alt=""/></a>
                        </div>

                        <button type="button" className="btn footer_button text-center justify-content-center btn-block">Скачать
                            приложение Artel <img className="ml-2" src="images/install.svg" alt=""/></button>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;