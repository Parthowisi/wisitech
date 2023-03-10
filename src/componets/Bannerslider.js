import React from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const BannerSlider = () => {

    const settings_home = {
        dots: true,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
         <div className="home_banner">
            <div className="home_banner_row">

                <Slider {...settings_home}>
                    <>
                    <div className="hmebn_slider" style={{ backgroundImage: 'url("assets/images/webp/banner-1.webp")' }}>
                        <div className="hme_bnr_container">
                            <div className="hme_brn_wrap">
                            <h2>Ecommerce<br /> Your Way</h2>
                            <div className="hme_bnr_label">Huge Variety of online stores options</div>
                            <div className="hme_bnr_desc">Fully customized ecommerce to emphatically <br />
                                present your brands and products</div>
                            <div className="hme_bnr_btn"><a className="common_btn" href="#">GET STARTED TODAY</a></div>
                            </div>
                        </div>
                    </div>
                    </>

                    <>
                    <div className="hmebn_slider" style={{backgroundImage: 'url("assets/images/webp/banner-2.webp")'}}>
                        <div className="hme_bnr_container">
                            <div className="hme_brn_wrap">
                            <h2>Ecommerce<br /> Your Way</h2>
                            <div className="hme_bnr_label">Huge Variety of online stores options</div>
                            <div className="hme_bnr_desc">Fully customized ecommerce to emphatically <br />
                                present your brands and products</div>
                            <div className="hme_bnr_btn"><a className="common_btn" href="#">GET STARTED TODAY</a></div>
                            </div>
                        </div>
                    </div>
                    </>

                    <>
                    <div className="hmebn_slider" style={{backgroundImage: 'url("assets/images/webp/banner-3.webp")'}}>
                    <div className="hme_bnr_container">
                        <div className="hme_brn_wrap">
                        <h2>Ecommerce<br /> Your Way</h2>
                        <div className="hme_bnr_label">Huge Variety of online stores options</div>
                        <div className="hme_bnr_desc">Fully customized ecommerce to emphatically <br />
                            present your brands and products</div>
                        <div className="hme_bnr_btn"><a className="common_btn" href="#">GET STARTED TODAY</a></div>
                        </div>
                    </div>
                    </div>
                    </>

                    <>
                    <div className="hmebn_slider" style={{backgroundImage: 'url("assets/images/webp/banner-4.webp")'}}>
                    <div className="hme_bnr_container">
                        <div className="hme_brn_wrap">
                        <h2>Ecommerce<br /> Your Way</h2>
                        <div className="hme_bnr_label">Huge Variety of online stores options</div>
                        <div className="hme_bnr_desc">Fully customized ecommerce to emphatically <br />
                            present your brands and products</div>
                        <div className="hme_bnr_btn"><a className="common_btn" href="#">GET STARTED TODAY</a></div>
                        </div>
                    </div>
                    </div>
                    </>

                </Slider>

             </div>
        </div>
        </>
    );
}

export default BannerSlider;