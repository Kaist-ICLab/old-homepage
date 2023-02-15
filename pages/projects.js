import { getAllFilesDataFrontMatter } from '@/lib/mdx'

import { PageSEO } from '@/components/SEO'

import Card from '@/components/ProjectCard'
import { H2, H3 } from '@/components/MDXComponents'

import styles from '@/css/pages/projects.module.css'

export async function getStaticProps() {
  const projects = await getAllFilesDataFrontMatter('projects')
  return { props: { projects } }
}

export default function Projects({ projects }) {
  return (
    <div className={styles.container}>
      <PageSEO
        title={'Projects'}
        description={'Projects conducted(or conducting) on the Interactive Computing Lab'}
      />
      <H2>Projects</H2>
      <H3>Ongoing</H3>
      <div className={styles.project_list}>
        {projects.map((project) => (
          <Card key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
