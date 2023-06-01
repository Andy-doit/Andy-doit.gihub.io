import React from 'react'
import "./Carousel.css"
const CarouselMain = () => {
    return (
        <>
            <div className='caro-main justify-content-center'>
                <div className='container  caro-item col-md-8 offset-md-2'>
                    <div id="carouselExampleAutoplaying" class="carousel slide   " data-bs-ride="carousel">
                        <div class="carousel-inner ">
                            <div class="carousel-item active  ">
                                <img src="/asset/img/caro2.png" class="d-block w-100 rounded-4" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="/asset/img/caro3.png" class="d-block w-100 rounded-4" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="/asset/img/caro2.png" class="d-block w-100 rounded-4" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarouselMain