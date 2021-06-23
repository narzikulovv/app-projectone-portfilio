import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import {InputGroup, InputGroupAddon, Button, Input} from 'reactstrap';
import {AiFillHeart} from "react-icons/ai";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {MdExitToApp} from "react-icons/md";
import {Link} from "react-router-dom"


const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    const exitHomePage = (r) => {
        r.preventDefault();

        localStorage.setItem("login", "");
        localStorage.setItem("surname", "");
        localStorage.setItem("mail", "");
        localStorage.setItem("logget", "");

        props.history.push("/gygy")
    };


    return (
        <div className="container">
            <div className="row w-100 ">
                <Navbar color="light" light className="w-100 bg-white sardor" expand="md">
                    <Link to="/главний"><img src="./images/Logo.svg" alt=""/></Link>


                    <div className="wrap d-flex align-items-center">
                        <div className="social1 ">
                            <button type="button"><AiFillHeart/></button>
                        </div>

                        <div className="social1 ">
                            <button type="button"><AiOutlineShoppingCart/></button>
                        </div>
                        <NavbarToggler className="burger" onClick={toggle}>
                            <button aria-label="Toggle navigation" type="button" className="navbar-toggler">
                                <span><img src="./images/burger.svg" alt=""/></span></button>
                        </NavbarToggler>

                    </div>

                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem className="navItem">
                                <NavLink href="#!"><Link to="/категории">Категории</Link></NavLink>
                            </NavItem>
                            <NavItem className="navItem1">
                                <NavLink href="#!"><Link to="/партнеры">Партнеры</Link></NavLink>
                            </NavItem>
                            <NavItem className="navItem1">
                                <NavLink href="#!"><Link to="/сервисные">Сервисные центры</Link></NavLink>
                            </NavItem>
                            <NavItem className="navItem1">
                                <NavLink href="#!"><Link to="/новости">Новости</Link></NavLink>
                            </NavItem>

                            <NavItem className="navItem1">
                                <NavLink href="#!"><Link to="контакты">Контакты</Link></NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText className="d-flex sardor">
                            <InputGroup className="d-flex search">
                                <Input className="input " placeholder="Search"/>
                                <InputGroupAddon addonType="append" className="lupa social4">
                                    <Button type="button"> <img src="./images/lupa.svg" alt=""/></Button>
                                </InputGroupAddon>
                            </InputGroup>
                            <div className="social2 social">
                                <button type="button"><AiFillHeart/></button>
                            </div>
                            <div className="social2 social">
                                <button type="button"><AiOutlineShoppingCart/></button>
                            </div>
                            <div className="social3 social ">


                                <button
                                    onClick={exitHomePage}
                                    type="button"
                                    className="d-flex align-items-center justify-content-center">


                                    <MdExitToApp/> <h6 className="">Exit</h6></button>
                            </div>
                        </NavbarText>
                    </Collapse>

                </Navbar>

                <InputGroup className=" search2 mb-3">
                    <div className="div d-flex mobile">
                        <InputGroupAddon addonType="append" className="lupa social4 lupa_mobile">
                            <Button type="button" className=""> <img src="./images/lupa.svg" alt=""/></Button>
                        </InputGroupAddon>
                        <Input className="input pl-4 border-0 input_mobile" placeholder="Search"/>
                    </div>
                </InputGroup>

            </div>
        </div>
    );
}

export default Example;