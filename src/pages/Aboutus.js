import React, { Fragment } from 'react';
import WebPimg from '../componets/Webpimg';
import Header from '../componets/Header';
import Footer from '../componets/Footer';


function Aboutus(){
    const mystyle = {
        backgroundColor: "black"
    };

    return(
        <Fragment>

            <Header mystyle={mystyle} />
         
                <div className="outer_wrapper" style={{marginTop: "70px"}}>
                <div className="heading">ABOUT US</div>
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

            <Footer />
            
        </Fragment>
    )
}

export default Aboutus;