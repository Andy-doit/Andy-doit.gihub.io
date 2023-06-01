import React from 'react'
import { FaHome } from 'react-icons/fa';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer-main '>
            <div className='row justify-content-center align-items-center   container'>
                <div className="col-md-4 main-item">
                    <div className="d-flex item-footer">
                        <FaHome style={{
                            color: "white",
                            fontSize: "22px"
                        }} />
                        <p>HoChiMinh City</p>
                    </div>
                    <div className="d-flex item-footer">
                        <FaPhoneSquareAlt style={{
                            color: "white",
                            fontSize: "22px"
                        }} />
                        <p>079.333.2254</p>
                    </div>
                    <div className="d-flex item-footer">
                        <FaEnvelope style={{
                            color: "white",
                            fontSize: "22px"
                        }} />
                        <p>Andy@gmail.com</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='item-about'>
                        <div>
                            <h5>About Company</h5>
                            <p> ANDY sneaker, Inc. is an VietNam multinational association that is involved in the design, development, manufacturing and worldwide marketing and sales of apparel, footwear, accessories, equipment and services.</p>
                        </div>
                        <div className="icon">
                            <a href='https://www.facebook.com/anlee0703/' target='_blank'><FaFacebookSquare /></a>
                            <a className="item-icon"><FaGithub /></a>
                            <a href='#'><FaInstagramSquare /></a>
                        </div>
                    </div>
                </div>
            </div >
        </div>



    )
}

export default Footer