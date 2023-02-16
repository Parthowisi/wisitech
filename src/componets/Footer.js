import React, { useState } from 'react';
import WebPimg from './Webpimg';

const Footer = () => {

    return (
        <>
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
        </>
    );
}

export default Footer;