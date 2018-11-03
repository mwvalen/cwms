import React from 'react'
import Slider from 'react-slick'

const nextArrow = <img src="/assets/nextIcon.png" />
const prevArrow = <img src="/assets/prevIcon.png" />

class SlickCarousel extends React.Component {
  constructor (props) {
    super(props)
    this.settings = {
      fade: true,
      draggable: false,
      swipeToSlide: false,
      swipe: false,
      autoplay: true,
      autoplaySpeed: 5000,
      nextArrow,
      prevArrow,
      speed: 1400,
      pauseOnHover: false
    }
  }
  render () {
    return (
      <div className="slick-container">
        <Slider {...this.settings}>
          <div className="slide">
            <img src="/assets/banner.jpg" />
          </div>
          <div className="slide">
            <img src="/assets/banner-2.jpg" />
          </div>
          <div className="slide">
            <img src="/assets/banner-3.jpg" />
          </div>
        </Slider>
      </div>
    )
  }
}

export default SlickCarousel
