import React, { useState } from "react";

const ProductTab = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <div className="tab-style3">
                <ul className="nav nav-tabs text-uppercase">
                    <li className="nav-item">
                        <a
                            className={
                                activeIndex === 1
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                            id="Description-tab"
                            data-bs-toggle="tab"
                            onClick={() => handleOnClick(1)}
                        >
                            Description
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className={
                                activeIndex === 2
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                            id="Additional-info-tab"
                            data-bs-toggle="tab"
                            onClick={() => handleOnClick(2)}
                        >
                            Additional info
                        </a>
                    </li>
                    
                </ul>
                <div className="tab-content shop_info_tab entry-main-content">
                    <div
                        className={
                            activeIndex === 1
                                ? "tab-pane fade show active"
                                : "tab-pane fade"
                        }
                        id="Description"
                    >
                        <div className="">
                            <p>
                                Uninhibited carnally hired played in whimpered
                                dear gorilla koala depending and much yikes off
                                far quetzal goodness and from for grimaced
                                goodness unaccountably and meadowlark near
                                unblushingly crucial scallop tightly neurotic
                                hungrily some and dear furiously this apart.
                            </p>
                            <p>
                                Spluttered narrowly yikes left moth in yikes
                                bowed this that grizzly much hello on spoon-fed
                                that alas rethought much decently richly and wow
                                against the frequent fluidly at formidable
                                acceptably flapped besides and much circa far
                                over the bucolically hey precarious goldfinch
                                mastodon goodness gnashed a jellyfish and one
                                however because.
                            </p>
                            <ul className="product-more-infor mt-30">
                                <li>
                                    <span>Type Of Packing</span> Bottle
                                </li>
                                <li>
                                    <span>Color</span> Green, Pink, Powder Blue,
                                    Purple
                                </li>
                                <li>
                                    <span>Quantity Per Case</span> 100ml
                                </li>
                                <li>
                                    <span>Ethyl Alcohol</span> 70%
                                </li>
                                <li>
                                    <span>Piece In One</span> Carton
                                </li>
                            </ul>
                            <hr className="wp-block-separator is-style-dots" />
                            <p>
                                Laconic overheard dear woodchuck wow this
                                outrageously taut beaver hey hello far
                                meadowlark imitatively egregiously hugged that
                                yikes minimally unanimous pouted flirtatiously
                                as beaver beheld above forward energetic across
                                this jeepers beneficently cockily less a the
                                raucously that magic upheld far so the this
                                where crud then below after jeez enchanting
                                drunkenly more much wow callously irrespective
                                limpet.
                            </p>
                            <h4 className="mt-30">Packaging & Delivery</h4>
                            <hr className="wp-block-separator is-style-wide" />
                            <p>
                                Less lion goodness that euphemistically robin
                                expeditiously bluebird smugly scratched far
                                while thus cackled sheepishly rigid after due
                                one assenting regarding censorious while
                                occasional or this more crane went more as this
                                less much amid overhung anathematic because much
                                held one exuberantly sheep goodness so where rat
                                wry well concomitantly.
                            </p>
                            <p>
                                Scallop or far crud plain remarkably far by thus
                                far iguana lewd precociously and and less
                                rattlesnake contrary caustic wow this near alas
                                and next and pled the yikes articulate about as
                                less cackled dalmatian in much less well jeering
                                for the thanks blindly sentimental whimpered
                                less across objectively fanciful grimaced wildly
                                some wow and rose jeepers outgrew lugubrious
                                luridly irrationally attractively dachshund.
                            </p>
                        </div>
                    </div>
                    <div
                        className={
                            activeIndex === 2
                                ? "tab-pane fade show active"
                                : "tab-pane fade"
                        }
                        id="Additional-info"
                    >
                        <table className="font-md">
                            <tbody>
                                <tr className="stand-up">
                                    <th>Stand Up</th>
                                    <td>
                                        <p>
                                            35″L x 24″W x 37-45″H(front to back
                                            wheel)
                                        </p>
                                    </td>
                                </tr>
                                <tr className="folded-wo-wheels">
                                    <th>Folded (w/o wheels)</th>
                                    <td>
                                        <p>32.5″L x 18.5″W x 16.5″H</p>
                                    </td>
                                </tr>
                                <tr className="folded-w-wheels">
                                    <th>Folded (w/ wheels)</th>
                                    <td>
                                        <p>32.5″L x 24″W x 18.5″H</p>
                                    </td>
                                </tr>
                                <tr className="door-pass-through">
                                    <th>Door Pass Through</th>
                                    <td>
                                        <p>24</p>
                                    </td>
                                </tr>
                                <tr className="frame">
                                    <th>Frame</th>
                                    <td>
                                        <p>Aluminum</p>
                                    </td>
                                </tr>
                                <tr className="weight-wo-wheels">
                                    <th>Weight (w/o wheels)</th>
                                    <td>
                                        <p>20 LBS</p>
                                    </td>
                                </tr>
                                <tr className="weight-capacity">
                                    <th>Weight Capacity</th>
                                    <td>
                                        <p>60 LBS</p>
                                    </td>
                                </tr>
                                <tr className="width">
                                    <th>Width</th>
                                    <td>
                                        <p>24″</p>
                                    </td>
                                </tr>
                                <tr className="handle-height-ground-to-handle">
                                    <th>Handle height (ground to handle)</th>
                                    <td>
                                        <p>37-45″</p>
                                    </td>
                                </tr>
                                <tr className="wheels">
                                    <th>Wheels</th>
                                    <td>
                                        <p>12″ air / wide track slick tread</p>
                                    </td>
                                </tr>
                                <tr className="seat-back-height">
                                    <th>Seat back height</th>
                                    <td>
                                        <p>21.5″</p>
                                    </td>
                                </tr>
                                <tr className="head-room-inside-canopy">
                                    <th>Head room (inside canopy)</th>
                                    <td>
                                        <p>25″</p>
                                    </td>
                                </tr>
                                <tr className="pa_color">
                                    <th>Color</th>
                                    <td>
                                        <p>Black, Blue, Red, White</p>
                                    </td>
                                </tr>
                                <tr className="pa_size">
                                    <th>Size</th>
                                    <td>
                                        <p>M, S</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default ProductTab;
