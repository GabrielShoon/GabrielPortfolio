import React from 'react'
import "./certification.css"
import { Data } from './Data'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Certifications = () => {
    return (
        <section className="certification container section" id='certifications'>
            <h2 className="section__title">Certifications</h2>
            <span className="section__subtitle">Licenses & Certifications</span>

            <Swiper className="certification__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination]}
            >
                {Data.map(({ id, image, title, description }) => {
                    return (
                        <SwiperSlide className="certification__card" key={id}>
                            <img src={image} alt=""
                                className='certification__img' />

                            <h3 className="certification__name">{title}</h3>
                            <p className="certification__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Certifications