import React from 'react'
import { Autoplay, Mousewheel, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Figure } from '../Figure';

export const OutWork = () => {
    const breakpoint = {
        // when window width is <= 320px
        320: { slidesPerView: 1 },
        // when window width is <= 480px
        480: { slidesPerView: 2 },
        // when window width is <= 768px
        768: { slidesPerView: 3 }
    };

    return (
        <div className="row">
            <Swiper
                modules={[Autoplay, Mousewheel, Pagination]}
                loop={true}
                mousewheel={true}
                pagination={{ clickable: true }}
                autoplay
                grabCursor={true}
                breakpoints={breakpoint}
                spaceBetween={20}
            >
                {
                    [1, 2, 3, 4, 5]
                        .map(item => (
                            <SwiperSlide>
                                <Figure key={item} />
                            </SwiperSlide>
                        ))
                }

            </Swiper>
        </div>/* /.row */
    );
}
