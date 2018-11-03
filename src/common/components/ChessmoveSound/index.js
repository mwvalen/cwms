import React from 'react'

const typeToFile = {
  check: 'move-check.mp3',
  capture: 'capture.mp3',
  castle: 'castle.mp3',
  promote: 'promote.mp3',
  normal: 'move-self.mp3',
  success: 'success.wav',
  error: 'error.wav'
}

class ChessmoveSound extends React.Component {
  getSoundSrc = type => {
    //return `/assets/${typeToFile[type]}`
    return '';
  }
  componentDidMount () {
    /*this.refs.audio.addEventListener('loadeddata', () => {
      this.refs.audio.play()
    })*/
  }
  render () {
    return (
      <audio ref="audio" src={this.getSoundSrc(this.props.type)}/>
    )
  }
}

export default ChessmoveSound
