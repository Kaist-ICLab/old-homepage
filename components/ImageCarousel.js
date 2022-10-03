import { useState } from 'react'

import Image from './Image'

import Left from '@/data/Icons/chevron-left.svg'
import Right from '@/data/Icons/chevron-right.svg'

import styles from '@/css/components/ImageCarousel.module.css'

const ImageCarousel = ({ imgList }) => {
  const num_image = imgList.length
  const [activeIdx, setActive] = useState(0)
  return (
    <div className={styles.image_carousel}>
      <div className={styles.image_wrapper}>
        {imgList.map((img, idx) => (
          <Image
            key={idx}
            className={activeIdx === idx ? styles.visible : styles.hidden}
            src={img}
            alt="Carousel Image"
            layout="fill"
            objectFit="contain"
          />
        ))}
      </div>
      <div className={styles.controller}>
        <button
          className={styles.icon_wrapper}
          onClick={(event) => {
            setActive((activeIdx + num_image - 1) % num_image)
          }}
        >
          <Left />
        </button>
        <div className={styles.radios}>
          {imgList.map((img, idx) => (
            <div
              key={`radio_${idx}`}
              className={`${styles.input_radios} ${activeIdx == idx ? styles.checked : ''}`}
              onClick={(event) => {
                setActive(idx)
              }}
            />
          ))}
        </div>
        <button
          className={styles.icon_wrapper}
          onClick={(event) => {
            setActive((activeIdx + 1) % num_image)
          }}
        >
          <Right />
        </button>
      </div>
    </div>
  )
}

export default ImageCarousel
