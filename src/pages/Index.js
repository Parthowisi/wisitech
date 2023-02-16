import React, { Fragment } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import WebPimg from '../componets/Webpimg';
import Header from '../componets/Header';


const settings_home = {
    dots: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    autoplay:false,
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
            
          <Header />

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

                </div>{/* home_banner_row */}
                </div>{/* home_banner */}
                <div className="outer_wrapper">
                <div className="heading">Our Expertise</div>
                <div className="expt_section">
                    <div className="expt_col">
                    <div className="expt_img"><WebPimg src="assets/images/Ecommerce-icon.png" alt="Ecommerce" webpsrc="assets/images/webp/Ecommerce-icon.webp" /></div>
                    <div className="expt_label poppins">PROFITABLE</div>
                    <div className="expt_title"><a className="poppins" href="#">Ecommerce</a></div>
                    <div className="expt_desc">Customize top of the line ecommerce frameworks to meet your needs and branding. Build dynamic, user-friendly and secure ecommerce store that delights shoppers and brings sales.</div>
                    </div>{/* expt_col */}
                    <div className="expt_col">
                    <div className="expt_img"><WebPimg src="assets/images/Digital-Marketing-icon.png" alt="Digital Marketing" webpsrc="assets/images/webp/Digital-Marketing-icon.webp" /></div>
                    <div className="expt_label">laser focused</div>
                    <div className="expt_title"><a href="#">Digital Marketing</a></div>
                    <div className="expt_desc">Get on top of Google search results, AdWords, Amazon, Etsy, eBay, Walmart and Wayfair searches. Leverage Social Media to create buzz with posts and paid campaigns. We we plan and execute laser-focused campaigns with high RoI.</div>
                    </div>{/* expt_col */}
                    <div className="expt_col">
                    <div className="expt_img"><WebPimg src="assets/images/UX-UI-icon.png" alt="UX/UI" webpsrc="assets/images/webp/UX-UI-icon.webp" /></div>
                    <div className="expt_label">harmonious</div>
                    <div className="expt_title"><a href="#">UX/UI</a></div>
                    <div className="expt_desc">You want your visitors to be your buyers and your buyers to stay with you. Our UX/UI helps you achieve that. We create interactive, user-friendly and appealing designs that speak to your customers and help generate sales!</div>
                    </div>{/* expt_col */}
                    <div className="expt_col">
                    <div className="expt_img"><WebPimg src="assets/images/Web-Solutions-icon.png" alt="Web Solutions" /></div>
                    <div className="expt_label">CUSTOMIZED</div>
                    <div className="expt_title"><a href="#">Web Solutions</a></div>
                    <div className="expt_desc">Build your brand, engage customers, generate sales. Get result-oriented web solutions fully customized to meet your needs. We build your scalable, robust websites and web applications on the latest technologies and frameworks.</div>
                    </div>{/* expt_col */}
                    <div className="expt_col">
                    <div className="expt_img"><WebPimg src="assets/images/Graphic-Design-icon.png" alt="Graphic Design" /></div>
                    <div className="expt_label">captivating</div>
                    <div className="expt_title"><a href="#">Graphic Design</a></div>
                    <div className="expt_desc">Get sharp, convincing, no-frills designs for your websites, ecommerce stores, Apps, Amazon, Etsy, eBay stores, Social Media advertisements/banners and more… Our designs speak to your customers and help generate sales!</div>
                    </div>{/* expt_col */}
                    <div className="expt_col">
                    <div className="expt_img"><WebPimg src="assets/images/Mobile-Apps-icon.png" alt="Mobile Apps" /></div>
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
                        <WebPimg src="assets/images/year-icon.png" alt="" />
                        <div className="whyus_title poppins">1999</div>
                        <div className="whyus_txt">Established</div>
                    </div>{/* whyus_abt_row */}
                    </div>{/* whyus_abt_col */}
                    <div className="whyus_abt_col">
                    <div className="whyus_abt_row">
                        <WebPimg src="assets/images/solution-icon.png" alt="" />
                        <div className="whyus_title poppins">24+ Years</div>
                        <div className="whyus_txt">Providing Solutions</div>
                    </div>{/* whyus_abt_row */}
                    </div>{/* whyus_abt_col */}
                    <div className="whyus_abt_col">
                    <div className="whyus_abt_row">
                        <WebPimg src="assets/images/client-icon.png" alt="" />
                        <div className="whyus_title poppins">92%</div>
                        <div className="whyus_txt">Repeat Clients</div>
                    </div>{/* whyus_abt_row */}
                    </div>{/* whyus_abt_col */}
                    <div className="whyus_abt_col">
                    <div className="whyus_abt_row">
                        <WebPimg src="assets/images/worldwide-icon.png" alt="" />
                        <div className="whyus_title poppins">1,000+</div>
                        <div className="whyus_txt">Clients Worldwide</div>
                    </div>{/* whyus_abt_row */}
                    </div>{/* whyus_abt_col */}
                </div>{/* whyus_abt_section */}
                <div className="whyus_client">
                    <div className="whyus_clnt_col">
                    <div className="whyus_clnt_row">
                        <WebPimg src="assets/images/guarantee-icon.png" />
                        <div className="whyus_clnt_title poppins">Satisfaction Guaranteed</div>
                        <div className="whyus_clnt_desc">Quality solutions within budget</div>
                    </div>{/* whyus_clnt_row */}
                    </div>{/* whyus_clnt_col */}
                    <div className="whyus_clnt_col">
                    <div className="whyus_clnt_row">
                        <WebPimg src="assets/images/meeting-icon.png" />
                        <div className="whyus_clnt_title poppins">Meeting Deadlines</div>
                        <div className="whyus_clnt_desc">No delays, no cost over-runs</div>
                    </div>{/* whyus_clnt_row */}
                    </div>{/* whyus_clnt_col */}
                    <div className="whyus_clnt_col">
                    <div className="whyus_clnt_row">
                        <WebPimg src="assets/images/confid-icon.png" />
                        <div className="whyus_clnt_title poppins">Non-Disclosure Agreement</div>
                        <div className="whyus_clnt_desc">Your confidentiality is safe with us</div>
                    </div>{/* whyus_clnt_row */}
                    </div>{/* whyus_clnt_col */}
                    <div className="whyus_clnt_col">
                    <div className="whyus_clnt_row">
                        <WebPimg src="assets/images/presence-icon.png" />
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
                            <WebPimg src="assets/images/goals-icon.png" alt="" />
                            <div className="wrkprc_title poppins">Understand Your <br />
                            Business Goals</div>
                        </div>{/* work_proc_row */}
                        </div>{/* work_proc_col */}
                        <div className="work_proc_col">
                        <div className="work_proc_row">
                            <WebPimg src="assets/images/improvment-icon.png" alt="" />
                            <div className="wrkprc_title poppins">Identify Areas <br />
                            of Improvement</div>
                        </div>{/* work_proc_row */}
                        </div>{/* work_proc_col */}
                        <div className="work_proc_col">
                        <div className="work_proc_row">
                            <WebPimg src="assets/images/mark-need-icon.png" alt="" />
                            <div className="wrkprc_title poppins">Map Out the Technology <br />
                            &amp; Marketing Needs</div>
                        </div>{/* work_proc_row */}
                        </div>{/* work_proc_col */}
                        <div className="work_proc_col">
                        <div className="work_proc_row">
                            <WebPimg src="assets/images/appr-solution-icon.png" alt="" />
                            <div className="wrkprc_title poppins">Consult &amp; Advise <br />
                            the Appropriate Solutions</div>
                        </div>{/* work_proc_row */}
                        </div>{/* work_proc_col */}
                        <div className="work_proc_col">
                        <div className="work_proc_row">
                            <WebPimg src="assets/images/roadmap-icon.png" alt="" />
                            <div className="wrkprc_title poppins">Plan &amp; Implement <br />
                            Solutions Roadmap</div>
                        </div>{/* work_proc_row */}
                        </div>{/* work_proc_col */}
                        <div className="work_proc_col">
                        <div className="work_proc_row">
                            <WebPimg src="assets/images/success-icon.png" alt="" />
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
                    <WebPimg src="assets/images/tess.png" />
                    </div>{/* tstmnl_rgt */}
                </div>{/* tstmnl_wrap */}
                <div className="tstmnl_more"><a href="#">More Testimonials</a></div>
            </div>{/* testimonial_section */}


            <div className="our_client_section">
                <div className="outer_wrapper">
                    <div className="ourclnt_label poppins">Trusted By The</div>
                    <div className="heading poppins pad0">World’s Best Companies</div>
                    <div className="ourclnt_row">
                    <WebPimg src="assets/images/client-logo-1.png" alt="" />
                    <WebPimg src="assets/images/client-logo-2.png" alt="" />
                    <WebPimg src="assets/images/client-logo-3.png" alt="" />
                    <WebPimg src="assets/images/client-logo-4.png" alt="" />
                    <WebPimg src="assets/images/client-logo-5.png" alt="" />
                    <WebPimg src="assets/images/client-logo-6.png" alt="" />
                    <WebPimg src="assets/images/client-logo-7.png" alt="" />
                    <WebPimg src="assets/images/client-logo-8.png" alt="" />
                    </div>{/* ourclnt_row */}
                </div>{/* outer_wrapper */}
                </div>{/* our_client_section */}
                <div className="let_tlk_section">
                <div className="let_tlk_wrap">
                    <div className="letlk_lft">
                    <WebPimg src="assets/images/partho-mandal.png" websrc="assets/images/webp/partho-mandal.webp" alt="" />
                    </div>{/* letlk_lft */}
                    <div className="letlk_rgt">
                    <p>“When I founded Wisitech in January 1999, I believed we were at the right time to ride the crest of the digital wave as the World Wide Web exploded. We’ve stayed ahead of the technology trends to offer solutions that help our customers walk the web wisely and avoid the pitfalls. From ideation to design, from development to marketing, we partner you with a 360 degree approach. We know what works and will ensure it works for you.”</p>
                    <p><b>Partho Mondal</b>, CEO, Wisitech</p>
                    <a href="#" className="common_btn">LET'S TALK</a>
                    </div>{/* letlk_rgt */}
                </div>{/* let_tlk_wrap */}
                </div>{/* let_tlk_section */}
                <div className="outer_wrapper">
                <div className="heading">Our Blog</div>
                <div className="blog_section">
                    <div className="blog_col">
                    <WebPimg src="assets/images/blog-1.png" alt="" />
                    <a className="blog_title" href="#">How can you Benefit from Content Writing Services?</a>
                    </div>{/* blog_col */}
                    <div className="blog_col">
                    <WebPimg src="assets/images/blog-2.png" alt="" />
                    <a className="blog_title" href="#">Responsive Web Design Services  Create a Mobile-Friendly</a>
                    </div>{/* blog_col */}
                </div>{/* blog_section */}
                <div className="award_section">
                    <div className="heading">Recognitions &amp; Awards</div>
                    <div className="award_row">
                    <div className="award_img"><WebPimg src="assets/images/award-1.png" alt="" /></div>
                    <div className="award_img"><WebPimg src="assets/images/award-2.png" alt="" /></div>
                    <div className="award_img"><WebPimg src="assets/images/award-3.png" alt="" /></div>
                    <div className="award_img"><WebPimg src="assets/images/award-4.png" alt="" /></div>
                    <div className="award_img"><WebPimg src="assets/images/award-5.png" alt="" /></div>
                    <div className="award_img"><WebPimg src="assets/images/award-6.png" alt="" /></div>
                    <div className="award_img"><WebPimg src="assets/images/award-7.png" alt="" /></div>
                    <div className="award_img"><WebPimg src="assets/images/award-8.png" alt="" /></div>
                    <div className="award_img"><WebPimg src="assets/images/award-9.png" alt="" /></div>
                    <div className="award_img"><WebPimg src="assets/images/award-10.png" alt="" /></div>
                    <div className="award_img"><WebPimg src="assets/images/award-11.png" alt="" /></div>
                    <div className="award_img"><WebPimg src="assets/images/award-12.png" alt="" /></div>				
                    <div className="award_img"><WebPimg src="assets/images/award-14.png" alt="" /></div>
                    <div className="award_img"><WebPimg src="assets/images/award-13.png" alt="" /></div>
                    </div>{/* award_row */}
                </div>{/* award_section */}
                <div className="google_ads_section">
                    <div className="heading padT0">Google Ads Certified</div>
                    <div className="google_ads_row">
                    <div className="google_ads_col">
                        <WebPimg src="assets/images/google-ads-1.png" alt="" />
                        <div className="google_ads_txt">Google<br />
                        Ads Video<br />
                        Certification</div>
                    </div>{/* google_ads_col */}
                    <div className="google_ads_col">
                        <WebPimg src="assets/images/google-ads-2.png" alt="" />
                        <div className="google_ads_txt">Google<br />
                        Campaign Manager<br />
                        Certification</div>
                    </div>{/* google_ads_col */}
                    <div className="google_ads_col">
                        <WebPimg src="assets/images/google-ads-3.png" alt="" />
                        <div className="google_ads_txt">Google<br />
                        Ads Search<br />
                        Certification</div>
                    </div>{/* google_ads_col */}
                    <div className="google_ads_col">
                        <WebPimg src="assets/images/google-ads-4.png" alt="" />
                        <div className="google_ads_txt">Google<br />
                        Ads Display<br />
                        Certification</div>
                    </div>{/* google_ads_col */}
                    <div className="google_ads_col">
                        <WebPimg src="assets/images/google-ads-5.png" alt="" />
                        <div className="google_ads_txt">Google<br />
                        Shopping Ads<br />
                        Certification</div>
                    </div>{/* google_ads_col */}
                    </div>{/* google_ads_row */}
                    <div className="google_ads_btn"><a href="#" className="common_btn">FREE 30 MINUTE CONSULTATION</a></div>
                </div>{/* google_ads_section */}
                </div>{/* outer_wrapper */}
                <footer>
                <div className="outer_wrapper">
                     <div className="ft_menu_wrap">
        <div className="ft_menu_col">
          <div className="ft_menu_heading">Home</div>
          <div className="ft_menu_title">it consulting</div>
          <ul className="ft_menu">
            <li><a href="https://www.wisitech.com/web-consultancy-services/">it consulting services</a></li>
            <li><a href="https://www.wisitech.com/web-consultancy-services/web-business-consulting-services/">web business consulting</a></li>
            <li><a href="https://www.wisitech.com/web-consultancy-services/business-in-india/">expand business in india</a></li>
          </ul>
          <div className="ft_menu_title">Design</div>
          <ul className="ft_menu">
            <li><a href="https://www.wisitech.com/ux-ui-design-services/">ux/ui design</a></li>
            <li><a href="https://www.wisitech.com/web-development/responsive-web-design/">responsive web design</a></li>
            <li><a href="https://www.wisitech.com/web-development/website-designing-services/">web redesign</a></li>
          </ul>
          <div className="ft_menu_title">portfolio</div>
          <ul className="ft_menu">
            <li><a href="https://www.wisitech.com/portfolio/?work=ecommerce-sites">ecommerce sites</a></li>
            <li><a href="https://www.wisitech.com/portfolio/?work=web-apps">web apps</a></li>
            <li><a href="https://www.wisitech.com/portfolio/?work=mobile-apps">mobile apps</a></li>
            <li><a href="https://www.wisitech.com/portfolio/?work=wordpress-sites">wordpress sites</a></li>
            <li><a href="https://www.wisitech.com/portfolio/?work=corporate-sites">corporate sites</a></li>
            <li><a href="https://www.wisitech.com/portfolio/?work=digital-marketing">digital marketing</a>
              <ul className="ft_sub_menu">
                <li><a href="https://www.wisitech.com/portfolio/?work=digital-marketing-seo">seo</a></li>
                <li><a href="https://www.wisitech.com/portfolio/?work=digital-marketing-google-ads">google ads</a></li>
                <li><a href="https://www.wisitech.com/portfolio/?work=digital-marketing-social-media">social media</a></li>
                <li><a href="https://www.wisitech.com/portfolio/?work=digital-marketing-amazon">amazon</a></li>
                <li><a href="https://www.wisitech.com/portfolio/?work=digital-marketing-etsy">etsy</a></li>
              </ul>
            </li>
          </ul>
          <div className="ft_menu_title">about</div>
          <ul className="ft_menu">
            <li><a href="https://www.wisitech.com/web-design-web-development-company/">profile</a></li>
            <li><a href="https://www.wisitech.com/web-design-web-development-company/clients/">clients</a></li>
            <li><a href="https://www.wisitech.com/web-design-web-development-company/testimonials/">testimonials</a></li>
            <li><a href="https://www.wisitech.com/blog/">blog</a></li>
          </ul>
        </div>{/* ft_menu_col */}
        <div className="ft_menu_col">
          <div className="ft_menu_heading">development</div>                  
          <ul className="ft_menu">                                            
            <li><a href="https://www.wisitech.com/mobile-apps/">mobile app development</a>
              <ul className="ft_sub_menu">
                <li><a href="https://www.wisitech.com/mobile-apps/android-app-development/">Android App Development</a></li>
                <li><a href="https://www.wisitech.com/mobile-apps/iphone-app-development-services/">iphone App Development</a></li>
                <li><a href="https://www.wisitech.com/flutter-app-development/">Flutter App Development</a></li>
                <li><a href="https://www.wisitech.com/app-usability-testing-services/">App Usability Testing</a></li>
              </ul>
            </li>
            <li><a href="https://www.wisitech.com/ecommerce-web-design-development-company/">Ecommerce Development</a>
              <ul className="ft_sub_menu">
                <li><a href="https://www.wisitech.com/ecommerce-web-design-development-company/">Ecommerce Solutions</a></li>
                <li><a href="https://www.wisitech.com/ecommerce-solutions/artificial-intelligence/">Artificial Intelligence</a></li>
                <li><a href="https://www.wisitech.com/ecommerce-solutions/woocommerce-development/">WooCommerce Development</a></li>
                <li><a href="https://www.wisitech.com/ecommerce-solutions/cs-cart-development/">CS-Cart Development</a></li>
                <li><a href="https://www.wisitech.com/ecommerce-solutions/shopify-development/">Shopify Development</a></li>
                <li><a href="https://www.wisitech.com/ecommerce-solutions/bigcommerce-development-company/">BigCommerce Development</a></li>
                <li><a href="https://www.wisitech.com/ecommerce-solutions/magento-development/">Magento Development</a></li>
                <li><a href="https://www.wisitech.com/ecommerce-solutions/magento-upgrade-services/">Magento Upgrade Services</a></li>                               
              </ul>
            </li>   
            <li><a href="https://www.wisitech.com/web-development/">Web Development</a>
              <ul className="ft_sub_menu">
                <li><a href="https://www.wisitech.com/web-development/">Web Development Services </a></li>
                <li><a href="https://www.wisitech.com/mean-stack-developers/">MEAN Stack Development</a></li>
                <li><a href="https://www.wisitech.com/angular-js-developers/">Angular JS Development</a></li>
                <li><a href="https://www.wisitech.com/web-development/laravel-development/">Laravel Development</a></li>
                <li><a href="https://www.wisitech.com/web-development/wordpress-web-design-development/">WordPress Development</a></li>                                                          
              </ul>
            </li>
            <li><a href="https://www.wisitech.com/web-development/website-packages/">website packages</a></li>
            <li><a href="https://www.wisitech.com/web-development/kindle/">kindle publishing services</a></li> 
            <li><a href="https://www.wisitech.com/psd-to-html-responsive/">PSD to HTML Responsive</a></li>                                 
          </ul>
        </div>{/* ft_menu_col */}
        <div className="ft_menu_col">
          <div className="ft_menu_heading">Digital Marketing</div>                    
          <ul className="ft_menu">                                            
            <li><a href="https://www.wisitech.com/web-marketing/">Web Marketing</a>
              <ul className="ft_sub_menu">
                <li><a href="https://www.wisitech.com/web-marketing/">Digital Marketing Services</a></li>
                <li><a href="https://www.wisitech.com/web-marketing/search-engine-optimization-services/">SEO Services</a></li>
                <li><a href="https://www.wisitech.com/digital-marketing/seo-packages/">SEO/SMO Packages</a></li>
                <li><a href="https://www.wisitech.com/digital-marketing/social-media-services/">Social Media Marketing</a></li>
                <li><a href="https://www.wisitech.com/web-marketing/ppc-management/">Google AdWords Management</a></li>
                <li><a href="https://www.wisitech.com/digital-marketing/bad-link-removal-services/">Bad Link Removal Services</a></li>
                <li><a href="https://www.wisitech.com/digital-marketing/google-penalty-recovery-services/">Google Penalty Recovery Services</a></li>
              </ul>
            </li>
            <li><a href="https://www.wisitech.com/web-marketing/amazon-seo-ppc-services/">Amazon, Etsy, eBay, Walmart Marketing</a>
              <ul className="ft_sub_menu">
                <li><a href="https://www.wisitech.com/web-marketing/amazon-seo-ppc-services/">Amazon Marketing Services</a></li>
                <li><a href="https://www.wisitech.com/web-marketing/etsy-seo-services/">Etsy Marketing Services</a></li>
                <li><a href="https://www.wisitech.com/web-marketing/ebay-seo-services/">eBay Marketing Services</a></li>
                <li><a href="https://www.wisitech.com/walmart-marketing-services/">Walmart Marketing Services</a></li>                                                         
              </ul>
            </li>   
            <li><a href="https://www.wisitech.com/app-store-optimization-services/">App Store Optimization</a></li>
            <li><a href="https://www.wisitech.com/web-marketing/conversion-rate-optimization/">Conversion Rate Optimization</a></li>
            <li><a href="https://www.wisitech.com/content-development/">Content Development</a>
              <ul className="ft_sub_menu">
                <li><a href="https://www.wisitech.com/content-development/">SEO Copywriting</a></li>
                <li><a href="https://www.wisitech.com/content-development/sales-letters-business-writing/">Business Writing &amp; Sales</a></li>                                                                                           
              </ul>
            </li>
            <li><a href="https://www.wisitech.com/web-marketing/affiliate-marketing-services/">Affiliate Marketing</a></li>
            <li><a href="https://www.wisitech.com/facebook-advertising-services-agency/">Facebook Ads</a></li>   
            <li><a href="https://www.wisitech.com/linkedin-ads-marketing-services/">LinkedIn Ads</a></li>                                   
          </ul>
        </div>{/* ft_menu_col */}
      </div>{/* ft_menu_wrap */}
                    <div className="ft_address_wrap">
                    <div className="ft_add_col">
                        <div className="ft_add_row">
                        <WebPimg src="assets/images/india-flag.png" alt="" />
                        <div className="ft_add_cont">
                            <div className="ft_contry_name poppins">INDIA</div>
                            <div className="ft_contry_represnt">Partho Mondal</div>
                            <div className="ft_mail"><i className="fa fa-envelope" /> <a href="mailto:partho.m@wisitech.com">partho.m@wisitech.com</a></div>
                            <div className="ft_phone"><i className="fa fa-phone-volume" /><a href="tel:0091.9582.849.600">0091.9582.849.600</a><br />
                            <a href="tel:0091.9313.964.620">0091.9313.964.620</a></div>
                            <div className="ft_location"><i className="fa fa-location-dot" />76/2, Garhi, Sant Nagar,<br />
                            East of Kailash,<br />
                            New Delhi - 110065</div>
                        </div>{/* ft_add_cont */}
                        </div>{/* ft_add_row */}
                    </div>{/* ft_add_col */}
                    <div className="ft_add_col">
                        <div className="ft_add_row">
                        <WebPimg src="assets/images/usa-flag.png" alt="" />
                        <div className="ft_add_cont">
                            <div className="ft_contry_name poppins">USA</div>
                            <div className="ft_contry_represnt">Nader Y Zohar</div>
                            <div className="ft_mail"><i className="fa fa-envelope" /> <a href="mailto:nader@wisitech.com">nader@wisitech.com</a></div>
                            <div className="ft_phone"><i className="fa fa-phone-volume" /><a href="tel:001.888.680.0174">001.888.680.0174</a> (Toll Free)</div>
                            <div className="ft_location"><i className="fa fa-location-dot" />9190 West Olympic Blvd.<br />
                            Suite 233, Beverly Hills, CA 90212</div>
                        </div>{/* ft_add_cont */}
                        </div>{/* ft_add_row */}
                    </div>{/* ft_add_col */}
                    <div className="ft_add_col">
                        <div className="ft_add_row">
                        <WebPimg src="assets/images/canada-flag.png" alt="" />
                        <div className="ft_add_cont">
                            <div className="ft_contry_name poppins">CANADA</div>
                            <div className="ft_contry_represnt">Peeyush Sharma</div>
                            <div className="ft_mail"><i className="fa fa-envelope" /> <a href="mailto:peeyush@wisitech.com">peeyush@wisitech.com</a></div>
                            <div className="ft_phone"><i className="fa fa-phone-volume" /><a href="tel:001.416.577.8178">001.416.577.8178</a></div>
                            <div className="ft_location"><i className="fa fa-location-dot" />577 Annandale Street<br />
                            Oshawa, Ontario, L1H 7s6</div>
                        </div>{/* ft_add_cont */}
                        </div>{/* ft_add_row */}
                    </div>{/* ft_add_col */}
                    </div>{/* ft_address_wrap */}
                    <div className="ft_rating_row">
                    <a href="#" className="rating_row">
                        <span><WebPimg src="assets/images/rating.png" alt="" /></span>
                        <div className="rating_txt">Rated 4.9 out of 5.0 for Ecommerce, Web &amp; App Development Services by 1200 clients on over 9000+ overall projects.</div>
                    </a>
                    </div>{/* ft_rating_row */}
                </div>{/* outer_wrapper */}
                </footer>
                <div className="ft_copyright_row">
                <div className="outer_wrapper">
                    <div className="ft_btm_lft">
                    <div className="ft_ptrs_row">
                        <a href="https://www.wisitech.com/privacy-policy/">Privacy Policy</a> | <a href="https://www.wisitech.com/terms-conditions/">Terms & Conditions</a> | <a href="https://www.wisitech.com/refund-cancellation-policy/">Refund & Cancellation Policy</a> | <a href="https://www.wisitech.com/web-development/website-packages/">Service Pricing</a>
                    </div>{/* ft_ptrs_row */}
                    <div className="ft_copyright_txt">
                        Copyright © 2023 Wisitech InfoSolutions Pvt. Ltd. All Rights Reserved.
                    </div>{/* ft_copyright_txt */}
                    </div>{/* ft_btm_lft */}
                    <div className="ft_btm_rgt">				
                    <a href="https://www.facebook.com/WisitechInfoSolution" target="_blank"><i className="fa-brands fa-facebook-f" /></a>
                    <a href="https://in.linkedin.com/company/wisitech?trk=ppro_cprof" target="_blank"><i className="fa-brands fa-linkedin-in" /></a>
                    <a href="https://www.instagram.com/wisitech_infosolutions/" target="_blank"><i className="fa-brands fa-instagram" /></a>
                    </div>{/* ft_btm_rgt */}
                </div>{/* outer_wrapper */}
            </div>{/* ft_copyright_row */}

        </Fragment>
    )
}

export default Index;