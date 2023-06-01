import React from "react";
import './Header.css';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';


const HeaderLine = () => {
    return (
        <div className="line-main">
            <div className="row justify-content-between align-items-center " style={{ margin: 0 }}>

                <div className="col-md-5 d-flex justify-content-center line-items">
                    <div>
                        <FaFacebook>

                        </FaFacebook>
                    </div>
                    <div>
                        <FaInstagram></FaInstagram>
                    </div>
                    <div className="d-flex">
                        <div className="">
                            <p>andy@gmail.com</p>

                        </div>
                        <div className="">
                            <p>|</p>

                        </div>
                        <div className="">
                            <p>079 355 2206</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 justify-content-center">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <button class="input-group-text " id="basic-addon2"><FaSearch></FaSearch></button>
                    </div>

                </div>
                <div className="col-md-3 d-flex justify-content-center line-items">
                    <div>
                        <a>Đăng nhập</a>
                    </div>
                    <div className="">
                        <p>|</p>

                    </div>
                    <div>
                        <a>Đăng ký</a>
                    </div>
                </div>
                <div>

                </div>
            </div >
        </div>

    )


}

export default HeaderLine;
