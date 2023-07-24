import React from "react";
import CounterUp from "../elements/CounterUp";
const FunFactOne = () => {
  const data = [
    {
      title: "STUDENT ENROLLED",
      count: 45,
    },
    {
      title: "CLASSES COMPLETED",
      count: 32,
    },
    {
      title: "TOP INSTRUCTORS",
      count: 354,
    },
    {
      title: "SATISFACTION RATE",
      count: 99,
    },
  ];
  return (
    <>
      <section className="fun-fact-section p-0">
        <div className="auto-container">
          <div className="outer-box">
            <div className="bg-image" style={{ backgroundImage: "url(./images/background/3.jpg)" }} />
            <div className="row">
              {/* Content Column */}
              <div className="content-column col-lg-7 col-md-12 col-sm-12 order-2">
                <div className="inner-column">
                  <div className="sec-title light">
                    <span className="sub-title">We Deliver on time</span>
                    <h2>Total Coverage &amp; Flexibility in Exports &amp; Imports</h2>
                    <div className="text">Long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                  </div>
                  <div className="fact-counter">
                    <div className="row">
                      {/*Column*/}
                      <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                        <div className="inner">
                          <div className="count-box">
                            <CounterUp className="count-text" count={869} time={3} />
                          </div>
                          <h4 className="counter-title">
                            Projects <br />
                            Completed
                          </h4>
                          <i className="icon flaticon-delivery-8" />
                        </div>
                      </div>
                      {/*Column*/}
                      <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                        <div className="inner">
                          <div className="count-box">
                            <CounterUp className="count-text" count={683} time={3} />
                          </div>
                          <h4 className="counter-title">
                            Satisfied <br />
                            Customers
                          </h4>
                          <i className="icon flaticon-team" />
                        </div>
                      </div>
                      {/*Column*/}
                      <div className="counter-column col-lg-4 col-md-6 col-sm-12">
                        <div className="inner">
                          <div className="count-box">
                            <CounterUp className="count-text" count={975} time={3} />
                          </div>
                          <h4 className="counter-title">
                            Delivered
                            <br /> on Time
                          </h4>
                          <i className="icon flaticon-delivery-box-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-column col-lg-5 col-md-12 col-sm-12">
                <div className="inner-column">
                  <figure className="image">
                    <img src="images/resource/image-1.png" title="Tronis" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FunFactOne;
