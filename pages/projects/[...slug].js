// import fs from 'fs'
import { useMemo, useState } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import { formatSlug, getFileBySlug, getFiles } from '@/lib/mdx'

import { H1, H2 } from '@/components/Title'
import Image from '@/components/Image'

import styles from '@/css/pages/projectdetail.module.css'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { MDXComponents } from '@/components/MDXComponents'
import Publication from '@/components/Publication'
import ShortProfile from '@/components/ProfileShort'
import Link from '@/components/Link'

export async function getStaticPaths() {
  const posts = getFiles('Projects')
  console.log(posts)
  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('Projects', params.slug.join('/'))
  return { props: { post } }
}

export default function Projects({ post }) {
  const { mdxSource, toc, frontMatter } = post
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])
  const [size, setSize] = useState([1170, 600])

  return (
    <div className={styles.container}>
      <div className={styles.lnb}>
        <Link className={styles.icon_holder} href={'/projects'}>
          <ArrowBackIcon style={{ color: 'var(--primary-color)', width: '100%', height: '100%' }} />
        </Link>
        <H1>{frontMatter.title}</H1>
      </div>
      <div className={styles.content_container}>
        <div className={styles.image_holder} style={{ width: size[0], height: size[1] }}>
          <Image
            alt={'Project Overview'}
            src={frontMatter.image}
            width={size[0]}
            height={size[1]}
            layout="fill"
            objectFit="contain"
            onLoadingComplete={({ naturalWidth, naturalHeight }) => {
              const ratio = naturalWidth / naturalHeight
              1170 / ratio > 600 ? setSize([600 * ratio, 600]) : setSize([1170, 1170 / ratio])
            }}
          />
        </div>
        <MDXLayout components={MDXComponents} />
      </div>
      <div className={styles.publication_container}>
        <H2>Publications</H2>
        {/* {frontMatter.publications.map((pub_id)=><Publication />)} */}
      </div>
      <div>
        <H2>Participated Students</H2>
        <div className={styles.profile_container}>
          {/* {frontMatter.participated.map((name)=><ShortProfile/>)} */}
        </div>
      </div>
    </div>
  )
}
