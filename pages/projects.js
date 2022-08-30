import { getAllFilesDataFrontMatter } from '@/lib/mdx'

import { PageSEO } from '@/components/SEO'

import Tabs from '@/components/Tab'
import Card from '@/components/ProjectCard'
import { H1 } from '@/components/Title'

import styles from '@/css/pages/projects.module.css'

const tabList = ['Ongoing', 'Past']

export async function getStaticProps() {
  const posts = await getAllFilesDataFrontMatter('Projects')
  return { props: { posts } }
}

export default function Projects({ posts }) {
  return (
    <>
      <PageSEO
        title={`Projects`}
        description={'Projects conducted(or conducting) on the Interactive Computing Lab'}
      />
      <div className={styles.container}>
        <H1>Projects</H1>
        <Tabs
          tabList={tabList}
          childrenList={[
            <div key="Ongoing" className={styles.card_container}>
              {posts.map((post) => (
                <Card
                  key={post.slug}
                  id={post.slug}
                  imgSrc={post.image}
                  short_title={post.title}
                  title={post.title}
                  description={post.content}
                />
              ))}
            </div>,
            <div key="Past">TBA</div>,
          ]}
        />
      </div>
    </>
  )
}
