import Link from "next/link";
import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CounterUp from "../elements/CounterUp";

SwiperCore.use([Autoplay, Navigation]);
const IntroSlider = () => {
  const data = [
    {
      img: "news-1.jpg",
      title: "The quality role of the elementary teacher in education",
      comment: 10,
    },
    {
      img: "news-2.jpg",
      title: "The quality role of the elementary teacher in education",
      comment: 10,
    },
    {
      img: "news-3.jpg",
      title: "The quality role of the elementary teacher in education",
      comment: 10,
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".swiper-button-prev-style-3",
          nextEl: ".swiper-button-next-style-3",
        }}
        // breakpoints={{
        //     320: {
        //         slidesPerView: 1,
        //         spaceBetween: 30,
        //     },
        //     575: {
        //         slidesPerView: 1,
        //         spaceBetween: 30,
        //     },
        //     767: {
        //         slidesPerView: 1,
        //         spaceBetween: 30,
        //     },
        //     991: {
        //         slidesPerView: 2,
        //         spaceBetween: 30,
        //     },
        //     1199: {
        //         slidesPerView: 3,
        //         spaceBetween: 30,
        //     },
        //     1350: {
        //         slidesPerView: 3,
        //         spaceBetween: 30,
        //     },
        // }}
        className="news-carousel"
      >
        {data.map((item, i) => (
          <SwiperSlide>
            <div className="slide-item">
              <div className="bg-image" style={{ backgroundImage: "url(images/main-slider/3.jpg)" }} />
              <div className="auto-container">
                <div className="row">
                  <div className="content-column col-lg-7 col-md-12 col-sm-12">
                    <div className="content-box">
                      <h2 className="title animate-3">
                        Most trusted logistics <span className="colored">&amp;</span> delivery services
                      </h2>
                      <div className="btn-box animate-4">
                        <Link href="page-about" className="theme-btn btn-style-one alternate">
                          <span className="btn-title">Explore More</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="image-column col-lg-5 col-md-12 col-sm-12">
                    <div className="image-box">
                      <div className="fact-counter-one bounce-y">
                        <h4 className="counter-title">Trusted by</h4>
                        <div className="count-box">
                          <CounterUp className="count-text" count={1} time={3} />
                        </div>
                      </div>
                      <figure className="image animate-5 animate-x">
                        <img src="images/resource/truck.png" title="Tronis" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default IntroSlider;
