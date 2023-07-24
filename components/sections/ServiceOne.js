import React from 'react';
import  Link  from 'next/link';

const ServiceOne = () => {
    const data = [
        {
            img: "service-1.jpg",
            title: "Air freight"
        },
        {
            img: "service-2.jpg",
            title: "Sea freight"
        },
        {
            img: "service-3.jpg",
            title: "Road service"
        },
        {
            img: "service-4.jpg",
            title: "Other solution"
        },
    ];
    return (
        <>
            <section className="services-section">
                <div className="bg-image" style={{ backgroundImage: 'url(./images/background/1.jpg)' }} />
                <div className="anim-icons">
                    <span className="icon icon-wave-line" />
                </div>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">SPECIALISE IN THE TRANSPORTATION</span>
                        <h2>Specialist logistics services</h2>
                    </div>
                    <div className="row">
                        {data.map((item, i) => (
                            <div className="service-block col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box ">
                                    <div className="image-box">
                                        <figure className="image">
                                            <Link href="/page-service-details">
                                                <img src={`images/resource/${item.img}`} title="Tronis" />
                                            </Link>
                                        </figure>
                                    </div>
                                    <div className="content-box">
                                        <i className="icon flaticon-airplane-2" />
                                        <span className="sub-title">01 Service</span>
                                        <h4 className="title"><Link href="/page-service-details">{item.title}</Link></h4>
                                        <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </section>

        </>
    );
};

export default ServiceOne;