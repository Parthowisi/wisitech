import React, { Fragment } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Slider from "react-slick";


const settings_home = {
    dots: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1
};

const settings_portfolio = {
    dots: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true
};


function Index(){
    return(
        <Fragment>
            <header>
                <div className="header_wrapper">
                    <div className="header_row">
                    <div className="header_logo"><img src="assets/images/logo.png" alt="logo" /></div>
                    <nav>
                        <ul>
                        <li><a href="#">it consultig</a></li>
                        <li><a href="#">UX/Ui Design</a></li>
                        <li><a href="#">development</a></li>
                        <li><a href="#">digital marketing</a></li>
                        <li><a href="#">portfolio</a></li>
                        <li><a href="#">about</a></li>						                                       
                        </ul>
                    </nav>{/* nav */}
                    <div className="head_cont">
                        <div className="get_purposal"><a className="common_btn" href="#">GET A PROPOSAL</a></div>
                        <div className="head_phone"><a href="tel:888.680.0174"><i className="fa fa-phone-volume" /> 888.680.0174</a></div>
                    </div>{/* head_cont */}
                    </div>{/* header_row */}
                </div>{/* header_wrapper */}
                </header>{/* header */}
                <div className="home_banner">
                <div className="home_banner_row">

                <Slider {...settings_home}>
                    <>
                    <div className="hmebn_slider" style={{ backgroundImage: 'url("assets/images/banner-1.jpg")' }}>
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
                    <div className="hmebn_slider" style={{backgroundImage: 'url("assets/images/banner-2.jpg")'}}>
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
                    <div className="hmebn_slider" style={{backgroundImage: 'url("assets/images/banner-3.jpg")'}}>
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
                    <div className="hmebn_slider" style={{backgroundImage: 'url("assets/images/banner-4.jpg")'}}>
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

                </div>{/* home_banner_row */}
                </div>{/* home_banner */}
                <div className="outer_wrapper">
                <div className="heading">Our Expertise</div>
                <div className="expt_section">
                    <div className="expt_col">
                    <div className="expt_img"><img src="assets/images/Ecommerce-icon.png" alt="Ecommerce" /></div>
                    <div className="expt_label poppins">PROFITABLE</div>
                    <div className="expt_title"><a className="poppins" href="#">Ecommerce</a></div>
                    <div className="expt_desc">Customize top of the line ecommerce frameworks to meet your needs and branding. Build dynamic, user-friendly and secure ecommerce store that delights shoppers and brings sales.</div>
                    </div>{/* expt_col */}
                    <div className="expt_col">
                    <div className="expt_img"><img src="assets/images/Digital-Marketing-icon.png" alt="Digital Marketing" /></div>
                    <div className="expt_label">laser focused</div>
                    <div className="expt_title"><a href="#">Digital Marketing</a></div>
                    <div className="expt_desc">Get on top of Google search results, AdWords, Amazon, Etsy, eBay, Walmart and Wayfair searches. Leverage Social Media to create buzz with posts and paid campaigns. We we plan and execute laser-focused campaigns with high RoI.</div>
                    </div>{/* expt_col */}
                    <div className="expt_col">
                    <div className="expt_img"><img src="assets/images/UX-UI-icon.png" alt="UX/UI" /></div>
                    <div className="expt_label">harmonious</div>
                    <div className="expt_title"><a href="#">UX/UI</a></div>
                    <div className="expt_desc">You want your visitors to be your buyers and your buyers to stay with you. Our UX/UI helps you achieve that. We create interactive, user-friendly and appealing designs that speak to your customers and help generate sales!</div>
                    </div>{/* expt_col */}
                    <div className="expt_col">
                    <div className="expt_img"><img src="assets/images/Web-Solutions-icon.png" alt="Web Solutions" /></div>
                    <div className="expt_label">CUSTOMIZED</div>
                    <div className="expt_title"><a href="#">Web Solutions</a></div>
                    <div className="expt_desc">Build your brand, engage customers, generate sales. Get result-oriented web solutions fully customized to meet your needs. We build your scalable, robust websites and web applications on the latest technologies and frameworks.</div>
                    </div>{/* expt_col */}
                    <div className="expt_col">
                    <div className="expt_img"><img src="assets/images/Graphic-Design-icon.png" alt="Graphic Design" /></div>
                    <div className="expt_label">captivating</div>
                    <div className="expt_title"><a href="#">Graphic Design</a></div>
                    <div className="expt_desc">Get sharp, convincing, no-frills designs for your websites, ecommerce stores, Apps, Amazon, Etsy, eBay stores, Social Media advertisements/banners and more… Our designs speak to your customers and help generate sales!</div>
                    </div>{/* expt_col */}
                    <div className="expt_col">
                    <div className="expt_img"><img src="assets/images/Mobile-Apps-icon.png" alt="Mobile Apps" /></div>
                    <div className="expt_label">NewGen</div>
                    <div className="expt_title"><a href="#">Mobile Apps</a></div>
                    <div className="expt_desc">Unlock the potential of your business, increase sales and enhance branding. Target and efficiently interact with your users. Build a long-lasting relationship with your customers.</div>
                    </div>{/* expt_col */}
                </div>{/* expt_section */}
                </div>{/* outer_wrapper */}
                <div className="whyus_section">
                <div className="heading padB0">Why Us?</div>
                <div className="whyus_label">Your Reliable Digital Solutions Partner</div>
                <div className="whyus_desc">With our proven track record for success we will <br />help you succeed in your online venture.</div>
                <div className="whyus_abt_section">
                    <div className="whyus_abt_col">
                    <div className="whyus_abt_row">
                        <img src="assets/images/year-icon.png" alt="" />
                        <div className="whyus_title poppins">1999</div>
                        <div className="whyus_txt">Established</div>
                    </div>{/* whyus_abt_row */}
                    </div>{/* whyus_abt_col */}
                    <div className="whyus_abt_col">
                    <div className="whyus_abt_row">
                        <img src="assets/images/solution-icon.png" alt="" />
                        <div className="whyus_title poppins">24+ Years</div>
                        <div className="whyus_txt">Providing Solutions</div>
                    </div>{/* whyus_abt_row */}
                    </div>{/* whyus_abt_col */}
                    <div className="whyus_abt_col">
                    <div className="whyus_abt_row">
                        <img src="assets/images/client-icon.png" alt="" />
                        <div className="whyus_title poppins">92%</div>
                        <div className="whyus_txt">Repeat Clients</div>
                    </div>{/* whyus_abt_row */}
                    </div>{/* whyus_abt_col */}
                    <div className="whyus_abt_col">
                    <div className="whyus_abt_row">
                        <img src="assets/images/worldwide-icon.png" alt="" />
                        <div className="whyus_title poppins">1,000+</div>
                        <div className="whyus_txt">Clients Worldwide</div>
                    </div>{/* whyus_abt_row */}
                    </div>{/* whyus_abt_col */}
                </div>{/* whyus_abt_section */}
                <div className="whyus_client">
                    <div className="whyus_clnt_col">
                    <div className="whyus_clnt_row">
                        <img src="assets/images/guarantee-icon.png" />
                        <div className="whyus_clnt_title poppins">Satisfaction Guaranteed</div>
                        <div className="whyus_clnt_desc">Quality solutions within budget</div>
                    </div>{/* whyus_clnt_row */}
                    </div>{/* whyus_clnt_col */}
                    <div className="whyus_clnt_col">
                    <div className="whyus_clnt_row">
                        <img src="assets/images/meeting-icon.png" />
                        <div className="whyus_clnt_title poppins">Meeting Deadlines</div>
                        <div className="whyus_clnt_desc">No delays, no cost over-runs</div>
                    </div>{/* whyus_clnt_row */}
                    </div>{/* whyus_clnt_col */}
                    <div className="whyus_clnt_col">
                    <div className="whyus_clnt_row">
                        <img src="assets/images/confid-icon.png" />
                        <div className="whyus_clnt_title poppins">Non-Disclosure Agreement</div>
                        <div className="whyus_clnt_desc">Your confidentiality is safe with us</div>
                    </div>{/* whyus_clnt_row */}
                    </div>{/* whyus_clnt_col */}
                    <div className="whyus_clnt_col">
                    <div className="whyus_clnt_row">
                        <img src="assets/images/presence-icon.png" />
                        <div className="whyus_clnt_title poppins">Worldwide Presence</div>
                        <div className="whyus_clnt_desc">In USA, Canada and India</div>
                    </div>{/* whyus_clnt_row */}
                    </div>{/* whyus_clnt_col */}
                </div>{/* whyus_client */}
                </div>{/* whyus_section */}
                <div className="work_proc_section">
                <div className="outer_wrapper">
                    <div className="ourwrk_label poppins">Our Work Process</div>
                    <div className="heading padT0">The Wisitech Way</div>
                    <div className="mob_scroll">
                    <div className="work_proc_wrap">
                        <div className="work_proc_col">
                        <div className="work_proc_row">
                            <img src="assets/images/goals-icon.png" alt="" />
                            <div className="wrkprc_title poppins">Understand Your <br />
                            Business Goals</div>
                        </div>{/* work_proc_row */}
                        </div>{/* work_proc_col */}
                        <div className="work_proc_col">
                        <div className="work_proc_row">
                            <img src="assets/images/improvment-icon.png" alt="" />
                            <div className="wrkprc_title poppins">Identify Areas <br />
                            of Improvement</div>
                        </div>{/* work_proc_row */}
                        </div>{/* work_proc_col */}
                        <div className="work_proc_col">
                        <div className="work_proc_row">
                            <img src="assets/images/mark-need-icon.png" alt="" />
                            <div className="wrkprc_title poppins">Map Out the Technology <br />
                            &amp; Marketing Needs</div>
                        </div>{/* work_proc_row */}
                        </div>{/* work_proc_col */}
                        <div className="work_proc_col">
                        <div className="work_proc_row">
                            <img src="assets/images/appr-solution-icon.png" alt="" />
                            <div className="wrkprc_title poppins">Consult &amp; Advise <br />
                            the Appropriate Solutions</div>
                        </div>{/* work_proc_row */}
                        </div>{/* work_proc_col */}
                        <div className="work_proc_col">
                        <div className="work_proc_row">
                            <img src="assets/images/roadmap-icon.png" alt="" />
                            <div className="wrkprc_title poppins">Plan &amp; Implement <br />
                            Solutions Roadmap</div>
                        </div>{/* work_proc_row */}
                        </div>{/* work_proc_col */}
                        <div className="work_proc_col">
                        <div className="work_proc_row">
                            <img src="assets/images/success-icon.png" alt="" />
                            <div className="wrkprc_title poppins">Provide Support <br />
                            to Ensure Success</div>
                        </div>{/* work_proc_row */}
                        </div>{/* work_proc_col */}
                    </div>{/* work_proc_wrap */}
                    </div>{/* mob_scroll */}
                    <div className="const_btn"><a href="#" className="common_btn poppins">FREE 30 MINUTE CONSULTATION</a></div>
                </div>{/* outer_wrapper */}
                </div>{/* work_proc_section */}
                <div className="testimonial_section">
                <div className="heading poppins padB0">Our Happy Clients</div>
                <div className="tstmnl_label poppins">Wonderful partner — I recommend to any business</div>
                <div className="tstmnl_wrap">
                    <div className="tstmnl_lft">
                    <div className="tstmnl_desc">
                        <p>Wisitech has been handling our web development, SEO, Facebook shopping catalog etc. for years.</p>
                        <p>I cannot ask for a better partnership and a better team. They have extensive knowledge and are available both day and night whenever problems arise.</p>
                        <p>They have taken the time to learn about our products to better position us for high sales.</p>
                        <p><b>Tess Winningham</b><br />
                        CEO &amp; Co Founder<br />
                        <a href="QuickTrickAlignment.com" target="_blank">QuickTrickAlignment.com</a></p>
                    </div>{/* tstmnl_desc */}
                    </div>{/* tstmnl_lft */}
                    <div className="tstmnl_rgt">
                    <img src="assets/images/tess.png" />
                    </div>{/* tstmnl_rgt */}
                </div>{/* tstmnl_wrap */}
                <div className="tstmnl_more"><a href="#">More Testimonials</a></div>
            </div>{/* testimonial_section */}
        </Fragment>
    )
}

export default Index;