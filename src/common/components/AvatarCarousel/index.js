import React from 'react'
import Slider from 'react-slick'
import styles from './styles.css'

const avatars = [
  'pawn',
  'knight',
  'bishop',
  'rook',
  'queen',
  'king',
  'advanced1',
  'advanced2',
  'advanced3'
]

class AvatarCarousel extends React.Component {
  constructor (props) {
    super(props)
    this.settings = {
      arrows: false,
      fade: true,
      draggable: false,
      swipeToSlide: false,
      swipe: false,
      autoplay: props.autoplay !== undefined ? props.autoplay : true,
      autoplaySpeed: 5000,
      speed: 1400,
      pauseOnHover: false,
      initialSlide: props.index || 0
    }
  }
  handleLevelChange = index => {
    this.refs.slider.slickGoTo(index)
  }
  render () {
    return (
      <div className={styles.avatarCarousel}>
        <Slider ref="slider" {...this.settings}>
          {
            avatars.map(avatar => {
              return (
                <div key={avatar} className="slide">
                  <img src={`/assets/school/${avatar}-roll.png`}/>
                </div>
              )
            })
          }
        </Slider>
      </div>
    )
  }
}

export default AvatarCarousel
