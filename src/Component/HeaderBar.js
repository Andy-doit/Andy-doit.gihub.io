import React from "react";
import { FaAngleDown } from 'react-icons/fa';

const HeaderBar = () => {
    return (
        <div className="bar-main">

            <div className="row container ">
                <div className="d-flex align-items-center">
                    <div className="col-md-4 bar-logo text-center">
                        <img src="./asset/img/logo.svg"
                            style={{
                                width: "18%"
                            }}
                        />
                    </div>
                    <div className="col-md-5">
                        <ul className="d-flex justify-content-center align-items-center"
                            style={{
                                fontSize: "18px",
                                marginTop: "30px"
                            }}
                        >
                            <li class="btn-group dropdown-center">
                                <a type="button" class="">New & Featured</a>
                                <a type="button" class="dropdown-toggle dropdown-toggle-split"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="visually-hidden">Toggle Dropdown</span>
                                </a>
                                <ul class="dropdown-menu "
                                    style={{
                                        width: "900px",
                                    }}
                                >
                                    <li>
                                        <div class=" row">
                                            <div className="d-flex justify-content-center item-content">
                                                <div className="col-md-3">

                                                    <ul>
                                                        <li>Shop Icons</li>
                                                        <li class="dropdown-item"><a>Air Force 1</a></li>
                                                        <li class="dropdown-item"><a>Air Jordan 1</a></li>
                                                        <li class="dropdown-item"><a>Air Max</a></li>
                                                        <li class="dropdown-item"><a>Blazer</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-3">
                                                    <ul>
                                                        <li>Featured</li>
                                                        <li class="dropdown-item"><a>New Release</a></li>
                                                        <li class="dropdown-item"><a>Latest Shoes</a></li>
                                                        <li class="dropdown-item"><a>Latest Clothing</a></li>
                                                        <li class="dropdown-item"><a>Best Seller</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-3">
                                                    <ul>
                                                        <li>New Arrivals</li>
                                                        <li class="dropdown-item"><a>All shoes</a></li>
                                                        <li class="dropdown-item"><a>Running</a></li>
                                                        <li class="dropdown-item"><a>Lifestyle </a></li>
                                                        <li class="dropdown-item"><a>Jordan</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-3">
                                                    <ul>
                                                        <li>Drops</li>
                                                        <li class="dropdown-item"><a>Air Force 1</a></li>
                                                        <li class="dropdown-item"><a>Air Jordan 1</a></li>
                                                        <li class="dropdown-item"><a>Air Max</a></li>
                                                        <li class="dropdown-item"><a>Blazer</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </li>
                            <li class="btn-group dropdown-center">
                                <a type="button" class="">Men</a>
                                <a type="button" class="dropdown-toggle dropdown-toggle-split"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="visually-hidden">Toggle Dropdown</span>
                                </a>
                                <ul class="dropdown-menu "
                                    style={{
                                        width: "900px",
                                    }}
                                >
                                    <li>
                                        <div class=" row">
                                            <div className="d-flex justify-content-center item-content">
                                                <div className="col-md-3">

                                                    <ul>
                                                        <li>Featured</li>
                                                        <li class="dropdown-item"><a>New Release</a></li>
                                                        <li class="dropdown-item"><a>Latest Shoes</a></li>
                                                        <li class="dropdown-item"><a>Latest Clothing</a></li>
                                                        <li class="dropdown-item"><a>Best Seller</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-3">
                                                    <ul>
                                                        <li>Shoes</li>
                                                        <li class="dropdown-item"><a>All shoes</a></li>
                                                        <li class="dropdown-item"><a>Running</a></li>
                                                        <li class="dropdown-item"><a>Lifestyle </a></li>
                                                        <li class="dropdown-item"><a>Jordan</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-3">
                                                    <ul>
                                                        <li>Clothing</li>
                                                        <li class="dropdown-item"><a>All clothing</a></li>
                                                        <li class="dropdown-item"><a>Tops and T-shirt</a></li>
                                                        <li class="dropdown-item"><a>Short</a></li>
                                                        <li class="dropdown-item"><a>Pant</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-3">
                                                    <ul>
                                                        <li>Shop by sport</li>
                                                        <li class="dropdown-item"><a>Running</a></li>
                                                        <li class="dropdown-item"><a>Football</a></li>
                                                        <li class="dropdown-item"><a>Gym</a></li>
                                                        <li class="dropdown-item"><a>Yoga</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </li>
                            <li class="btn-group dropdown-center">
                                <a type="button" class="">Woman</a>
                                <a type="button" class="dropdown-toggle dropdown-toggle-split"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="visually-hidden">Toggle Dropdown</span>
                                </a>
                                <ul class="dropdown-menu "
                                    style={{
                                        width: "900px",
                                    }}
                                >
                                    <li>
                                        <div class=" row">
                                            <div className="d-flex justify-content-center item-content">
                                                <div className="col-md-3">

                                                    <ul>
                                                        <li>Featured</li>
                                                        <li class="dropdown-item"><a>New Release</a></li>
                                                        <li class="dropdown-item"><a>Latest Shoes</a></li>
                                                        <li class="dropdown-item"><a>Latest Clothing</a></li>
                                                        <li class="dropdown-item"><a>Best Seller</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-3">
                                                    <ul>
                                                        <li>Shoes</li>
                                                        <li class="dropdown-item"><a>All shoes</a></li>
                                                        <li class="dropdown-item"><a>Running</a></li>
                                                        <li class="dropdown-item"><a>Lifestyle </a></li>
                                                        <li class="dropdown-item"><a>Jordan</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-3">
                                                    <ul>
                                                        <li>Clothing</li>
                                                        <li class="dropdown-item"><a>All clothing</a></li>
                                                        <li class="dropdown-item"><a>Tops and T-shirt</a></li>
                                                        <li class="dropdown-item"><a>Short</a></li>
                                                        <li class="dropdown-item"><a>Pant</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-3">
                                                    <ul>
                                                        <li>Shop by sport</li>
                                                        <li class="dropdown-item"><a>Running</a></li>
                                                        <li class="dropdown-item"><a>Football</a></li>
                                                        <li class="dropdown-item"><a>Gym</a></li>
                                                        <li class="dropdown-item"><a>Yoga</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </li>
                            <li class="btn-group dropdown-center">
                                <a type="button" class="activiti-hover">Kid</a>
                                <a type="button" class="dropdown-toggle dropdown-toggle-split"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="visually-hidden">Toggle Dropdown</span>
                                </a>
                                <ul class="dropdown-menu "
                                    style={{
                                        width: "900px",
                                    }}
                                >
                                    <li>
                                        <div class=" row">
                                            <div className="d-flex justify-content-center item-content">
                                                <div className="col-md-3">

                                                    <ul>
                                                        <li>Featured</li>
                                                        <li class="dropdown-item"><a>New Release</a></li>
                                                        <li class="dropdown-item"><a>Latest Shoes</a></li>
                                                        <li class="dropdown-item"><a>Latest Clothing</a></li>
                                                        <li class="dropdown-item"><a>Best Seller</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-3">
                                                    <ul>
                                                        <li>Shoes</li>
                                                        <li class="dropdown-item"><a>All shoes</a></li>
                                                        <li class="dropdown-item"><a>Running</a></li>
                                                        <li class="dropdown-item"><a>Lifestyle </a></li>
                                                        <li class="dropdown-item"><a>Jordan</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-3">
                                                    <ul>
                                                        <li>Clothing</li>
                                                        <li class="dropdown-item"><a>All clothing</a></li>
                                                        <li class="dropdown-item"><a>Tops and T-shirt</a></li>
                                                        <li class="dropdown-item"><a>Short</a></li>
                                                        <li class="dropdown-item"><a>Pant</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-3">
                                                    <ul>
                                                        <li>Shop by sport</li>
                                                        <li class="dropdown-item"><a>Running</a></li>
                                                        <li class="dropdown-item"><a>Football</a></li>
                                                        <li class="dropdown-item"><a>Gym</a></li>
                                                        <li class="dropdown-item"><a>Yoga</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </li>

                        </ul>
                    </div>

                </div>

            </div>
        </div>


    )


}

export default HeaderBar;
