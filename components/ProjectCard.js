import Image from './Image'
import Link from './Link'
import styles from '@/css/components/ProjectCard.module.css'

const ProjectCard = ({ project: project }) => (
  <Link className={styles.project_card} href={`/projects/${project.slug}`}>
    <div className={styles.image_wrapper}>
      {/* <Image src={project.image} alt={'overview'} layout="fill" objectFit="contain" /> */}
      <Image src={project.image} alt={'overview'} width={560} height={280} quality={80} />
    </div>
    <div className={styles.project_description}>
      <div className={styles.project_title}>{project.title}</div>
      <div className={styles.project_short}>
        {project.content.slice(0, 400) + (project.content.length < 400 ? '' : '...')}
      </div>
      <div className={styles.read_more}>Read more →</div>
    </div>
  </Link>
)

export default ProjectCard
