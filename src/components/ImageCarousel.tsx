"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'

import Wrapper from '@/data/graphics/main/wrapper.svg'
import styles from '@/styles/components/ImageCarousel.module.css'


interface ImageCarouselProps {
    imgList: string[]
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imgList }) => {
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
                        style={{ objectFit: "cover" }}
                        sizes="750px"
                        fill
                    />
                ))}
            </div>
            <Wrapper className={styles.right_mask} />
        </div>
    )
}

export default ImageCarousel
