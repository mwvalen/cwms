import React from 'react'
import Slider from 'react-slick'
import styles from './styles.css'

export default props => {
  const settings = props.settings || {
    draggable: false,
    swipeToSlide: false,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1400,
    pauseOnHover: false
  }
  return (
    <div className={styles.photoCarousel}>
      <Slider {...settings}>
        {
          props.photos.map(url => {
            return (
              <div key={url} className="slide">
                <img src={`/assets/gallery/${url}`}/>
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}
