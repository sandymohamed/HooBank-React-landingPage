import React from 'react';
import {logo, instagram,linkedin,facebook,twitter} from "../assets"

const Footer = () => {
    return (
        <div className='bg-dark h-100 p-5'>
            <div className="row">
                <div className="col-sm-3">
                    <img src={logo} alt="logo" className='mb-3' />
                    <p>A new way to make the payments easy, reliable and secure.</p>
                </div>
                <div className="col-sm-3 text-capitalize mt-5">
                    <h5 className='lh-lg text-white'>Usefull Links</h5>
                    <ul>
                        <a href="#"><li>content</li></a>
                        <a href="#"><li>how it works</li></a>
                        <a href="#"><li>create</li></a>
                        <a href="#"><li>explore</li></a>
                        <a href="#"><li>terms & services</li></a>
                    </ul>
                </div>
                <div className="col-sm-3 mt-5">
                <h5 className='lh-lg text-white'>Community</h5>
                    <ul>
                        <a href="#"><li>help center</li></a>
                        <a href="#"><li>partners</li></a>
                        <a href="#"><li>suggestions</li></a>
                        <a href="#"><li>blog</li></a>
                        <a href="#"><li>newsletters</li></a>
                    </ul>
                </div>
                <div className="col-sm-3 mt-5">
                <h5 className='lh-lg text-white'>Partner</h5>
                    <ul>
                        <a href="#"><li>our partner</li></a>
                        <a href="#"><li>become a partner</li></a>
                    </ul>
                </div>
                
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-6">
                    <p>Copyright <span>&copy;</span> 2021 HooBank. All Rights Reserved.</p>
                </div>
                <div className="col-sm-6">
                    <ul className='d-flex justify-content-end'>
                          <a href="#"><li className='me-2 pointer'><img src={instagram} alt="instagram"/></li></a>
                          <a href="#"><li className='me-2 pointer'><img src={facebook} alt="facebook"/></li></a>
                          <a href="#"><li className='me-2 pointer'><img src={linkedin} alt="linkedin"/></li></a>
                          <a href="#"><li className='me-2 pointer'><img src={twitter} alt="twitter"/></li></a>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Footer;