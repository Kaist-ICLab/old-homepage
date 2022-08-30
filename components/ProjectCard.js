import Image from './Image'
import Link from './Link'
import styles from '@/css/components/ProjectCard.module.css'

const ProjectCard = ({ id, imgSrc, short_title, title, description }) => (
  <Link className={styles.card} href={`/projects/${id}`}>
    <div className={styles.card_header}>
      <Image
        className={styles.card_image}
        src={imgSrc}
        alt="card__image"
        layout="fill"
        objectFit="contain"
      />
    </div>
    <div className={styles.card_body}>
      {/* <h3 className={styles.card_body_h3}>{short_title}</h3> */}
      <h3 className={styles.card_body_h3}>{title}</h3>
      <p className={styles.card_p}>
        {description.length > 155 ? description.slice(0, 155) + '...' : description}
      </p>
    </div>
    <div className={styles.card_footer}>
      <div>READ MORE</div>
    </div>
  </Link>
)

export default ProjectCard
