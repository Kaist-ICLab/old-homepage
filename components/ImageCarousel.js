import { useEffect, useState } from 'react'

import {Image} from './MDXComponents'

import Left from '@/data/Icons/chevron-left.svg'
import Right from '@/data/Icons/chevron-right.svg'

import Wrapper from '@/data/landing/wrapper.svg'

import styles from '@/css/components/ImageCarousel.module.css'

const ImageCarousel = ({ imgList, children }) => {
  const num_image = imgList.length
  const [activeIdx, setActive] = useState(0)

  useEffect(() => {
    setTimeout(() => setActive((activeIdx + 1) % num_image), 4000)
  })

  return (
    <div className={styles.image_carousel}>
      <div className={styles.ratio_keeper} />
      <div className={styles.image_wrapper}>
        {imgList.map((img, idx) => (
          <Image
            key={idx}
            className={activeIdx === idx ? styles.visible : styles.hidden}
            src={img}
            alt="Carousel Image"
            layout="fill"
            objectFit="cover"
            sizes="750px"
            // quality="80"
          />
        ))}
      </div>
      <Wrapper className={styles.right_mask} />
      {/* <div className={styles.title_wrapper}>
        <div className={styles.title}>{children}</div>
      </div> */}
    </div>
  )
}

export default ImageCarousel
