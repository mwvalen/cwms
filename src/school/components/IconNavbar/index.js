import React from 'react'
import {withRouter} from 'react-router-dom'
import styles from './styles.css'

class IconLink extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: props.active || false
    }
    this.activeRoute = props.active
  }
  componentWillReceiveProps (nextProps) {
    this.activeRoute = nextProps.active
  }
  shouldComponentUpdate () {
    return this.activeRoute !== true;
  }
  navigateToLink = () => {
    this.props.history.push(this.props.url)
  }
  showRollover = () => {
    this.setState({
      active: true
    })
  }
  hideRollover = () => {
    this.setState({
      active: false
    })
  }
  render () {
    return (
      <div className={this.props.className || ''}
        onClick={this.navigateToLink}
        onMouseEnter={this.showRollover}
        onMouseLeave={this.hideRollover}>
        <img className={this.state.active ? styles.active : ''}
          src={`${this.props.baseUrl}/${this.props.type}-roll.png`} />
      </div>
    )
  }
}

const IconLinkContainer = withRouter(IconLink)

export default props => {
  return (
    <div className={`flex items-center ${styles.iconNavbar}`}>
      {
        props.links.map(link => {
          return <IconLinkContainer
            className={styles.iconLink}
            baseUrl={props.baseUrl}
            key={link.url} {...link}/>
        })
      }
    </div>
  )
}
