import React from 'react'
import {rows, photos} from './constants'
import styles from './styles.css'
import landerStyles from '../../styles.css'

const GalleryCell = ({
  idx,
  caption,
  imgSrc,
  isSmall
}) => (
  <div className={styles[`cell${idx}`]}>
    <div style={{width: '100%', height: '100%'}}>
      <div className={styles.photo}
        style={{backgroundImage: `url(${imgSrc})`}}></div>
      <div className={`${styles.photoCaption} ${isSmall ? styles.sm : ''}`}>
        {caption}
      </div>
    </div>
  </div>
)

export default () => (
  <div className={styles.gallerySection}>
    <div className={landerStyles.headerSm}>
      <h3>Learning and Having Fun</h3>
    </div>
    <div className={`${styles.container} ${landerStyles.container}`}>
      <div className={styles.gallery}>
        {
          rows.map((row, idx) => (
            <div className={`${styles.row} ${styles[row]}`}>
              <div>
                {
                  photos[idx].map((photo, j) =>
                    <GalleryCell key={`row${idx}_${j}`}
                      idx={j + 1} {...photo} />
                  )
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </div>
)
