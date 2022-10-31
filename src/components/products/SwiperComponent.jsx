import React, {useEffect, useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import {Parallax, Pagination, Navigation, Keyboard, Scrollbar} from "swiper";
import {useSelector} from "react-redux";
import axios from "axios";

export default function SwiperProducts() {
    const {user} = useSelector((state) => ({...state}));

    const generatePassword = () => {
        var pass = "";
        var str =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
            "abcdefghijklmnopqrstuvwxyz0123456789@#$";
        for (let i = 1; i <= 10; i++) {
            var char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        return pass;
    };

    const sellProducts = () => {
        try {
            axios.post(`${process.env.REACT_APP_API_URL}/seller/${user.uid}`, {
                username: user.email.split("@")[0],
                email: user.email,
                password: generatePassword(),
            });
        
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                    background: "#3f7290",
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
                    className="parallax-bg"
                    style={{
                        background:
                            "url(https://cdn.techinasia.com/wp-content/uploads/2015/07/online-shopping-ecommerce-ss-1920.png) center/cover no-repeat",
                        width: "100%",
                        height: "100vh",
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide
                    style={{
                        // background:
                        //         "url(https://swiperjs.com/demos/images/nature-1.jpg) center/cover no-repeat",
                        width: "100%",
                        height: "80vh",
                    }}
                >
                    <div className="title" data-swiper-parallax="-300">
                        Want to Buy some Products
                    </div>
                    {/* <div className="subtitle" data-swiper-parallax="-200">
                        Subtitle
                    </div> */}
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Shopping categories websites are a great way to find
                            the perfect product. It is easy to navigate through
                            the website and find what you are looking for.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        // background:
                        //     "url(https://swiperjs.com/demos/images/nature-1.jpg) center/cover no-repeat",
                        width: "100%",
                        height: "80vh",
                    }}
                >
                    <div className="title" data-swiper-parallax="-300">
                        For some, shopping is an art; for others, it's a sport
                    </div>
                    {/* <div className="subtitle" data-swiper-parallax="-200">
                        Subtitle
                    </div> */}
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            The websites have some of the best deals that you
                            can find online. The prices are usually lower than
                            what you would see in stores, especially if you are
                            shopping for clothes.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        width: "100%",
                        height: "80vh",
                    }}
                >
                    <div className="title" data-swiper-parallax="-300">
                        The quickest way to know a woman is to go shopping with
                        her
                    </div>
                    {/* <div className="subtitle" data-swiper-parallax="-200">
                        Subtitle
                    </div> */}
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            The websites also offer a variety of products from
                            different brands and designers so it is easier to
                            find something that fits your personal style.
                        </p>
                    </div>
                    <div>
                        <button onClick={sellProducts}>
                            Want to sell products
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
