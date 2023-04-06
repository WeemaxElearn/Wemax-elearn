import React, { Component } from "react";
import Swiper from "react-id-swiper";

class TestimonialSlider extends Component {
  render() {
    const params = {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      effect: "fade",
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      renderPagenation: () => <div className="swiper-pagination" />,
    };
    let data = [
      {
        testimonialImage: "t1.jpg",
        testimonialName: "Nelson Mandela",
        testimonialDesignation: "Founder",
        testimonialText:
          "Education is the most powerful weapon which you can use to change the world.",
      },
      {
        testimonialImage: "t3.jpg",
        testimonialName: "William Butler Yeats",
        testimonialDesignation: "Engineer",
        testimonialText:
          "Education is not the filling of a pail, but the lighting of a fire.",
      },
      {
        testimonialImage: "t2.jpg",
        testimonialName: "Aristotle",
        testimonialDesignation: "CEO",
        testimonialText:
          "The roots of education are bitter, but the fruit is sweet.",
      },
    ];

    let DataList = data.map((val, i) => {
      return (
        <div className="swiper-slide testimonial-slider__single-slide" key={i}>
          <div className="author">
            <div
              className="author__image"
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "50px",
                overflow: "hidden",
              }}
            >
              <img
                src={`assets/img/testimonial/${val.testimonialImage}`}
                alt=""
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="author__details">
              <h4 className="name">{val.testimonialName}</h4>
              {/* <div className="designation">{val.testimonialDesignation}</div> */}
            </div>
          </div>
          <div className="content">{val.testimonialText}</div>
        </div>
      );
    });

    return (
      <div>
        {/*====================  testimonial slider area ====================*/}
        <div className="testimonial-slider-area testimonial-slider-area-bg section-space--inner--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="testimonial-slider">
                  <div className="testimonial-slider__container-area">
                    <Swiper {...params}>{DataList}</Swiper>
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of testimonial slider area  ====================*/}
      </div>
    );
  }
}

export default TestimonialSlider;
