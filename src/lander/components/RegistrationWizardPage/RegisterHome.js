import React from 'react'
import {Link} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import withWidth from 'material-ui/utils/withWidth'
import styles from './styles.css'

const links = [{
  url: '/register-school',
  name: 'School programs',
  desc: `Classes are held during lunch hour and after school in
    partner schools across the GTA.`,
  svg: 'strategy2',
  iconStyle: {
    background: 'rgb(248, 215, 182, 0.3)'
  }
}, {
  url: '/register-evening',
  name: 'Evening and Weekend',
  desc: `Our evening & weekend programs are held in  multiple locations for students of all skill levels.`,
  svg: 'strategy',
  iconStyle: {
    background: 'rgb(43, 204, 205, 0.3)'
  }
}, {
  url: '/register-camp',
  name: 'Summer camp',
  desc: `Register for summer camp now to take advantage of our early bird pricing.`,
  svg: 'chess-board',
  iconStyle: {
    background: 'rgb(192, 140, 244, 0.3)'
  }
}]

const RegisterLink = ({
  name,
  desc,
  iconStyle={},
  handleOnClick,
  children
}) => (
  <div className={styles.registerLink}>
    <div className={styles.icon} style={iconStyle}>
      {children}
    </div>
    <h1>{name}</h1>
    <p>{desc}</p>
    <RaisedButton
      primary={true}
      onClick={handleOnClick}
      label="Next" />
  </div>
)

export default withWidth()((props) => (
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: props.width > 1 ? '60px 0' : '0px 0'
  }}>
    {
      links.map(({name, desc, url, svg, iconStyle}) => (
        <RegisterLink name={name}
          desc={desc}
          handleOnClick={() => props.history.push(url)}
          iconStyle={iconStyle}>
          <img src={`assets/${svg}.svg`} alt={svg} />
        </RegisterLink>
      ))
    }
  </div>
))
