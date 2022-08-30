import Image from './Image'
import { useState } from 'react'
import styles from '@/css/components/ImageCarousel.module.css'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const ImageCarousel = ({ imgList }) => {
  const num_image = imgList.length
  const [activeIdx, setActive] = useState(0)
  const [size, setSize] = useState([1170, 600])
  return (
    <div className={styles.container} style={{ height: '600px', width: '1170px' }}>
      <div className={`${styles.image_holder}`} style={{ width: size[0], height: size[1] }}>
        <Image
          className={styles.image}
          src={imgList[activeIdx]}
          alt="Carousel Image"
          layout="fill"
          objectFit="contain"
          onLoadingComplete={({ naturalWidth, naturalHeight }) => {
            const ratio = naturalWidth / naturalHeight
            1170 / ratio > 600 ? setSize([600 * ratio, 600]) : setSize([1170, 1170 / ratio])
          }}
        />
      </div>
      <div
        className={styles.prev}
        onClick={(event) => {
          setActive(activeIdx == 0 ? num_image - 1 : activeIdx - 1)
        }}
      >
        <ChevronLeftIcon />
      </div>
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
      <div
        className={styles.next}
        onClick={(event) => {
          setActive(activeIdx == num_image - 1 ? 0 : activeIdx + 1)
        }}
      >
        <ChevronRightIcon />
      </div>
    </div>
  )
}

export default ImageCarousel
