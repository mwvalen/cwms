import classNames from 'classnames/bind'
import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import styles from './styles.css'

const cx = classNames.bind(styles)

export const NavLink = withRouter(props => {
  const className = cx({
    active: props.location.pathname.indexOf(props.url) === 0,
    navLink: true,
  })
  return (
    <Link className={`flex items-center justify-center ${className}`}
      to={props.url}>
      {props.name}
    </Link>
  )
})

export const NavLinkBtn = withRouter(props => {
  const className = cx({
    active: props.location.pathname.indexOf(props.url) === 0,
    navLink: true
  })
  return (
    <div style={props.style || {}} 
      className={`flex items-center justify-center ${className} ${props.className || ''}`}
      onClick={props.handleClick}>
      {props.name}
    </div>
  )
})
