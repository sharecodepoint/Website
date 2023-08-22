import Link from "next/link";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Search from "../ecommerce/Search";

const Header = ({
    totalCartItems,
    totalCompareItems,
    toggleClick,
    totalWishlistItems,
    headerStyle,
}) => {
    const [isToggled, setToggled] = useState(false);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY >= 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });

    const handleToggle = () => setToggled(!isToggled);

    return (
        <>
            <header className={`header-area ${headerStyle} header-height-2`}>
                
                <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="header-wrap">
                            <div className="logo logo-width-1">
                                <Link href="/">
                                    <a>
                                        <img
                                            src="/assets/imgs/theme/logo.svg"
                                            alt="logo"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="header-right">
                                <div className="search-style-2">
                                    <Search />
                                </div>
                                <div className="header-action-right">
                                    <div className="header-action-2">
                                        <div className="header-action-icon-2">
                                            <Link href="/shop-compare">
                                                <a>
                                                    <img
                                                        className="svgInject"
                                                        alt="CoderXpoint"
                                                        src="/assets/imgs/theme/icons/icon-compare.svg"
                                                    />
                                                    <span className="pro-count blue">
                                                        {totalCompareItems}
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <Link href="/shop-wishlist">
                                                <a>
                                                    <img
                                                        className="svgInject"
                                                        alt="CoderXpoint"
                                                        src="/assets/imgs/theme/icons/icon-heart.svg"
                                                    />
                                                    <span className="pro-count blue">
                                                        {totalWishlistItems}
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        scroll
                            ? "header-bottom header-bottom-bg-color sticky-bar stick"
                            : "header-bottom header-bottom-bg-color sticky-bar"
                    }
                >
                    <div className="container">
                        <div className="header-wrap header-space-between position-relative">
                            <div className="logo logo-width-1 d-block d-lg-none">
                                <Link href="/">
                                    <a>
                                        <img
                                            src="/assets/imgs/theme/logo.svg"
                                            alt="logo"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="header-nav d-none d-lg-flex">
                                <div className="main-categori-wrap d-none d-lg-block">
                                    <a
                                        className="categori-button-active"
                                        onClick={handleToggle}
                                    >
                                        <span className="fi-rs-apps"></span>
                                        Products
                                    </a>

                                    <div
                                        className={
                                            isToggled
                                                ? "categori-dropdown-wrap categori-dropdown-active-large open"
                                                : "categori-dropdown-wrap categori-dropdown-active-large"
                                        }
                                    >
                                        <ul>
                                            <li className="has-children">
                                                <Link href="/products">
                                                    <a>
                                                        <i className="CoderXpoint-font-dress"></i>
                                                        Audio Visual Solutions
                                                    </a>
                                                </Link>
                                                <div className="dropdown-menu">
                                                    <ul className="mega-menu d-lg-flex">
                                                        <li className="mega-menu-col col-lg-12">
                                                            <ul className="d-lg-flex">
                                                                <li className="mega-menu-col col-lg-6">
                                                                    <ul>
                                                                        <li>
                                                                            <span className="submenu-title">
                                                                                Connectivity Solutions
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/products">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    AV Cables
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/products">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Cable Managers
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/products">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Faceplates
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/products">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Floor Boxes
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li className="mega-menu-col col-lg-6">
                                                                    <ul>
                                                                        <li>
                                                                            <span className="submenu-title">
                                                                            Mounting Solutions
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Display Mount Brackets 
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Equiment Racks
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Erogonomic Monitor Mounts
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Floor Mount Trolleys
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                       
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                       
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="has-children">
                                                <Link href="/products">
                                                    <a>
                                                        <i className="CoderXpoint-font-tshirt"></i>
                                                        Display Solutions
                                                    </a>
                                                </Link>
                                                <div className="dropdown-menu">
                                                    <ul className="mega-menu d-lg-flex">
                                                        <li className="mega-menu-col col-lg-12">
                                                            <ul className="d-lg-flex">
                                                                <li className="mega-menu-col col-lg-6">
                                                                    <ul>
                                                                        
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Professional Displays
                                                                                </a>
                                                                            </Link>
                                                                   </li>
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    LED Displays
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                        
                                                                    </ul>
                                                                </li>
                                                                <li className="mega-menu-col col-lg-6">
                                                                    <ul>
                                                                        
                                                               
                                                                        <li>
                                                                            <Link href="/#">
                                                                                <a className="dropdown-item nav-link nav_item">
                                                                                    Interactive Displays
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                    
                                                                        
                                                                    </ul>
                                                                </li>
                                                               
                                                            </ul>
                                                        </li>
                                                   
                                                    </ul>
                                                </div>
                                            </li>
                                            
                                            <li>
                                                <ul
                                                    className="more_slide_open"
                                                    style={{ display: "none" }}
                                                >
                                                    <li>
                                                        <Link href="/products">
                                                            <a>
                                                                <i className="CoderXpoint-font-desktop"></i>
                                                                Beauty, Health
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products">
                                                            <a>
                                                                <i className="CoderXpoint-font-cpu"></i>
                                                                Bags and Shoes
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products">
                                                            <a>
                                                                <i className="CoderXpoint-font-diamond"></i>
                                                                Consumer
                                                                Electronics
                                                            </a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/products">
                                                            <a>
                                                                <i className="CoderXpoint-font-home"></i>
                                                                Automobiles &
                                                                Motorcycles
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                       
                                    </div>
                                </div>
                                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block">
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link href="/">
                                                    <a className="active">
                                                        Home
                                                    </a>
                                                </Link>
                                            
                                            </li>
                                            <li>
                                                <Link href="/page-about">
                                                    <a>About Us</a>
                                                </Link>
                                            </li>
                                            
                                            <li className="position-static">
                                                <Link href="/#">
                                                    <a>
                                                        Products
                                                        <i className="fi-rs-angle-down"></i>
                                                    </a>
                                                </Link>
                                                <ul className="mega-menu">
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <Link href="/#">
                                                            <a className="menu-title">
                                                                Audio Visual Solutions 
                                                            </a>
                                                        </Link>
                                                        <ul>
                                                            <li>
                                                                <Link href="/products">
                                                                    <a>
                                                                        Connectivity Solutions
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products">
                                                                    <a>
                                                                       Mounting Solutions
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products">
                                                                    <a>
                                                                        Projection Solutions
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <Link href="/#">
                                                            <a className="menu-title">
                                                                Display Solutions
                                                            </a>
                                                        </Link>
                                                        <ul>
                                                            <li>
                                                                <Link href="/products">
                                                                    <a>
                                                                        Professional Displays
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products">
                                                                    <a>
                                                                        Interactive Displays
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products">
                                                                    <a>
                                                                       LED Displays
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <Link href="/#">
                                                            <a className="menu-title">
                                                                Technology
                                                            </a>
                                                        </Link>
                                                        <ul>
                                                            <li>
                                                                <Link href="/products">
                                                                    <a>
                                                                        Gaming
                                                                        Laptops
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products">
                                                                    <a>
                                                                        Ultraslim
                                                                        Laptops
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products">
                                                                    <a>
                                                                        Tablets
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products">
                                                                    <a>
                                                                        Laptop
                                                                        Accessories
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products">
                                                                    <a>
                                                                        Tablet
                                                                        Accessories
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sub-mega-menu sub-mega-menu-width-22">
                                                        <Link href="/#">
                                                            <a className="menu-title">
                                                                Audio Visual Solutions 
                                                            </a>
                                                        </Link>
                                                        <ul>
                                                            <li>
                                                                <Link href="/products">
                                                                    <a>
                                                                        Connectivity Solutions
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products">
                                                                    <a>
                                                                       Mounting Solutions
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="/products">
                                                                    <a>
                                                                        Projection Solutions
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="#">
                                                    <a>
                                                        Blog
                                                    </a>
                                                </Link>
                                               
                                            </li>
                                            
                                            <li>
                                                <Link href="/page-contact">
                                                    <a>Contact Us</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                          
                            <div className="header-action-right d-block d-lg-none">
                                <div className="header-action-2">
                                    <div className="header-action-icon-2">
                                        <Link href="/shop-wishlist">
                                            <a>
                                                <img
                                                    alt="CoderXpoint"
                                                    src="/assets/imgs/theme/icons/icon-compare.svg"
                                                />
                                                <span className="pro-count white">
                                                    {totalCompareItems}
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <Link href="/shop-wishlist">
                                            <a>
                                                <img
                                                    alt="CoderXpoint"
                                                    src="/assets/imgs/theme/icons/icon-heart.svg"
                                                />
                                                <span className="pro-count white">
                                                    {totalWishlistItems}
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <Link href="/shop-cart">
                                            <a className="mini-cart-icon">
                                                <img
                                                    alt="CoderXpoint"
                                                    src="/assets/imgs/theme/icons/icon-cart.svg"
                                                />
                                                <span className="pro-count white">
                                                    {totalCartItems}
                                                </span>
                                            </a>
                                        </Link>
                                        
                                    </div>
                                    <div className="header-action-icon-2 d-block d-lg-none">
                                        <div
                                            className="burger-icon burger-icon-white"
                                            onClick={toggleClick}
                                        >
                                            <span className="burger-icon-top"></span>
                                            <span className="burger-icon-mid"></span>
                                            <span className="burger-icon-bottom"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

const mapStateToProps = (state) => ({
    totalCartItems: state.cart.length,
    totalCompareItems: state.compare.items.length,
    totalWishlistItems: state.wishlist.items.length,
});

export default connect(mapStateToProps, null)(Header);
