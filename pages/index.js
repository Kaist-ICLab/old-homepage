import { getFileBySlug, getImageList } from '@/lib/mdx'

import { MDX } from '@/components/MDXComponents'
import { PageSEO } from '@/components/SEO'
import ImageCarousel from '@/components/ImageCarousel'

import siteMetadata from '@/data/siteMetadata'

import styles from '@/css/pages/index.module.css'

export async function getStaticProps() {
  const landing = await getFileBySlug('.', 'Landing')
  const imgList = getImageList()
  return { props: { landing, imgList } }
}

export default function Home({ landing, imgList }) {
  const { mdxSource } = landing
  return (
    <div className={styles.container}>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className={styles.image_carousel_wrapper}>
        <ImageCarousel imgList={imgList} />
      </div>

      <div className={styles.mdx_wrapper}>
        <MDX mdxSource={mdxSource} />
      </div>
    </div>
  )
}
