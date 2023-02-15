import { useMemo, useState } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import { formatSlug, getFileBySlug, getFiles } from '@/lib/mdx'

import Publication from '@/components/Publication'
import ParticipatedStudent from '@/components/ParticipatedStudent'
import { Image, Link, H2, H3, MDXComponents } from '@/components/MDXComponents'

import publicationData from '@/data/publicationData'
import memberData from '@/data/memberData'

import Prev from '@/data/Icons/chevron-left.svg'

import styles from '@/css/pages/projectdetail.module.css'

export async function getStaticPaths() {
  const posts = getFiles('projects')
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
  const post = await getFileBySlug('projects', params.slug.join('/'))
  return { props: { post } }
}

export default function Projects({ post }) {
  const { mdxSource, toc, frontMatter } = post
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])
  // const [size, setSize] = useState([1170, 600])

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Link href={'/projects'} className={styles.prev}>
          <Prev className={styles.prev} />
        </Link>
        <H2>{frontMatter.title}</H2>
        <div className={styles.placeholder}></div>
      </div>
      <div className={styles.image_wrapper}>
        <Image src={frontMatter.image} alt="overview image" layout="fill" objectFit="contain" />
        {/* <Image src={frontMatter.image} alt="overview image" width={1170} height={585}/> */}
      </div>
      <MDXLayout components={MDXComponents} />
      <div className={styles.publication_container}>
        <H3>Publications</H3>
        <div className={styles.publication_list}>
          {frontMatter.publications.map((pub_id) => (
            <Publication key={pub_id} publication={publicationData[pub_id]} />
          ))}
        </div>
      </div>
      <div className={styles.participates_container}>
        <H3>Participated Students</H3>
        <div className={styles.participates_list}>
          {frontMatter.participated.map((name) => (
            <div key={name} className={styles.participate_wrapper}>
              <ParticipatedStudent member={memberData[name]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
