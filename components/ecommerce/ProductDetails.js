import Link from "next/link";
import { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import {
    addToCart,
    decreaseQuantity,
    increaseQuantity
} from "../../redux/action/cart";
import { addToCompare } from "../../redux/action/compareAction";
import { addToWishlist } from "../../redux/action/wishlistAction";
import ProductTab from "../elements/ProductTab";
import RelatedSlider from "../sliders/Related";
import ThumbSlider from "../sliders/Thumb";

const ProductDetails = ({
    product,
    cartItems,
    addToCompare,
    addToCart,
    addToWishlist,
    increaseQuantity,
    decreaseQuantity,
    quickView,
}) => {
    const [quantity, setQuantity] = useState(1);

    const handleCart = (product) => {
        addToCart(product);
        toast.success("Add to Cart !");
    };

    const handleCompare = (product) => {
        addToCompare(product);
        toast.success("Add to Compare !");
    };

    const handleWishlist = (product) => {
        addToWishlist(product);
        toast.success("Add to Wishlist !");
    };

    const inCart = cartItems.find((cartItem) => cartItem.id === product.id);

    console.log(inCart);

    return (
        <>
            <section className="mt-50 mb-50">
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-12">
                            <div className="product-detail accordion-detail">
                                <div className="row mb-50">
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <div className="detail-gallery">
                                            <span className="zoom-icon">
                                                <i className="fi-rs-search"></i>
                                            </span>

                                            <div className="product-image-slider">
                                                <ThumbSlider
                                                    product={product}
                                                />
                                            </div>
                                        </div>

                                        <div className="social-icons single-share">
                                            <ul className="text-grey-5 d-inline-block">
                                                <li>
                                                    <strong className="mr-10">
                                                        Share this:
                                                    </strong>
                                                </li>
                                                <li className="social-facebook">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/imgs/theme/icons/icon-facebook.svg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </li>
                                                <li className="social-twitter">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/imgs/theme/icons/icon-twitter.svg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </li>
                                                <li className="social-instagram">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/imgs/theme/icons/icon-instagram.svg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </li>
                                                <li className="social-linkedin">
                                                    <a href="#">
                                                        <img
                                                            src="/assets/imgs/theme/icons/icon-pinterest.svg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 col-xs-12">
                                        <div className="detail-info">
                                            <h2 className="title-detail">
                                                {product.title}
                                            </h2>
                                            <div className="product-detail-rating">
                                                <div className="pro-details-brand">
                                                    <span>
                                                        Category:
                                                        <Link href="/products">
                                                            <a>
                                                                &nbsp;{product.brand}
                                                            </a>
                                                        </Link>
                                                    </span>
                                                </div>
                                             
                                            </div>
                                           
                                            <div className="bt-1 border-color-1 mt-15 mb-15"></div>
                                            <div className="short-desc mb-30">
                                                <p>{product.desc}</p>
                                            </div>
                                            <div className="product_sort_info font-xs mb-30">
                                                <ul>
                                                    <li className="mb-10">
                                                        <i className="fi-rs-crown mr-5"></i>
                                                        1 Year AL Jazeera Brand
                                                        Warranty
                                                    </li>
                                                    <li className="mb-10">
                                                        <i className="fi-rs-refresh mr-5"></i>
                                                        30 Day Return Policy
                                                    </li>
                                                    <li>
                                                        <i className="fi-rs-credit-card mr-5"></i>
                                                        Cash on Delivery
                                                        available
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bt-1 border-color-1 mt-30 mb-30"></div>
                                            <div className="detail-extralink">
                                                
                                                <div className="product-extra-link2">
                                                 
                                                    <a
                                                        aria-label="Add To Wishlist"
                                                        className="action-btn hover-up"
                                                        onClick={(e) =>
                                                            handleWishlist(
                                                                product
                                                            )
                                                        }
                                                    >
                                                        <i className="fi-rs-heart"></i>
                                                    </a>
                                                    <a
                                                        aria-label="Compare"
                                                        className="action-btn hover-up"
                                                        onClick={(e) =>
                                                            handleCompare(
                                                                product
                                                            )
                                                        }
                                                    >
                                                        <i className="fi-rs-shuffle"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>

                                {quickView ? null : (
                                    <>
                                        <ProductTab />
                                        <div className="row mt-60">
                                            <div className="col-12">
                                                <h3 className="section-title style-1 mb-30">
                                                    Related products
                                                </h3>
                                            </div>
                                            <div className="col-12">
                                                <div className="row related-products position-relative">
                                                    <RelatedSlider />
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const mapStateToProps = (state) => ({
    cartItems: state.cart,
});

const mapDispatchToProps = {
    addToCompare,
    addToWishlist,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
