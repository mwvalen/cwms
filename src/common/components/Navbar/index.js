import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import {NavLink} from './nav-link'
import Separator from '../Separator'
import layout from 'common/themes/layout.css'
import styles from './styles.css'

const NavLogo = withRouter(props => {
  const className = props.showBigLogo
    ? styles.navLogo
    : styles.smallLogo
  return (
    <Link className={`${className} flex items-center`} to={props.root || '/'}>
      <img src="/assets/shield.png" />
      <h2>Chess with<br /> &nbsp;&nbsp;&nbsp; Mr. S</h2>
    </Link>
  )
})

export default props => {
  return (
    <nav className={`${styles.navbar} flex`}>
      <div style={{height: "90px"}} className={`${layout.container} flex justify-between`}>
        <NavLogo {...props}/>
        <div style={{height: '100%'}} className={`flex justify-between items-center`}>
            {
              props.links.map((link, idx) => {
                return (
                  <div key={`navlink-${idx}`} style={{color: "white"}} className="flex">
                    <NavLink key={link.name} {...link}/>
                    {idx < props.links.length - 1 &&
                      <Separator key={`separator-${idx}`}/>
                    }
                  </div>
                )
              })
            }
            {
              props.children
            }
        </div>
      </div>
    </nav>
  )
}
