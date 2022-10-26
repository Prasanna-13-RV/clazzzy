import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import {Parallax, Pagination, Navigation, Keyboard, Scrollbar} from "swiper";

export default function SwiperProducts() {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                keyboard={{
                    enabled: true,
                }}
                scrollbar={true}
                // loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                }}
                navigation={true}
                modules={[
                    Parallax,
                    Keyboard,
                    Scrollbar,
                    Navigation,
                    Pagination,
                ]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    // className="parallax-bg"
                    // style={{
                    //     background:
                    //         "url(https://swiperjs.com/demos/images/nature-1.jpg) center/cover no-repeat",
                    // }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide
                    style={{
                        background:
                            "url(https://swiperjs.com/demos/images/nature-1.jpg) center/cover no-repeat",
                        width: "100%",
                        height: "75vh",
                    }}
                >
                    <div className="title" data-swiper-parallax="-300">
                        Slide 1
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam dictum mattis velit, sit amet faucibus
                            felis iaculis nec. Nulla laoreet justo vitae
                            porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet
                            nibh euismod. Aliquam hendrerit lorem at elit
                            facilisis rutrum. Ut at ullamcorper velit. Nulla
                            ligula nisi, imperdiet ut lacinia nec, tincidunt ut
                            libero. Aenean feugiat non eros quis feugiat.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        background:
                            "url(https://swiperjs.com/demos/images/nature-1.jpg) center/cover no-repeat",
                        width: "100%",
                        height: "75vh",
                    }}
                >
                    <div className="title" data-swiper-parallax="-300">
                        Slide 2
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam dictum mattis velit, sit amet faucibus
                            felis iaculis nec. Nulla laoreet justo vitae
                            porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet
                            nibh euismod. Aliquam hendrerit lorem at elit
                            facilisis rutrum. Ut at ullamcorper velit. Nulla
                            ligula nisi, imperdiet ut lacinia nec, tincidunt ut
                            libero. Aenean feugiat non eros quis feugiat.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        background:
                            "url(https://swiperjs.com/demos/images/nature-1.jpg) center/cover no-repeat",
                        width: "100%",
                        height: "75vh",
                    }}
                >
                    <div className="title" data-swiper-parallax="-300">
                        Slide 3
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam dictum mattis velit, sit amet faucibus
                            felis iaculis nec. Nulla laoreet justo vitae
                            porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet
                            nibh euismod. Aliquam hendrerit lorem at elit
                            facilisis rutrum. Ut at ullamcorper velit. Nulla
                            ligula nisi, imperdiet ut lacinia nec, tincidunt ut
                            libero. Aenean feugiat non eros quis feugiat.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
