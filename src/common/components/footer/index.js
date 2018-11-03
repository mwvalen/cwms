import React from 'react'
import Separator from 'common/components/Separator'
import styles from './styles.css'

export default props => {
  return (
    <footer className={`${styles.footer} flex justify-center`}>
      <div>© Chess With Mr. S Inc.</div>
      <Separator />
      <div>All trademarks are property of Chess With Mr. S Inc.</div>
    </footer>
  )
}
