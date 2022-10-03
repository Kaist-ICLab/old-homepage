import Supplement from './Supplement'

import styles from '@/css/components/Publication.module.css'

const Publication = ({ publication }) => {
  return (
    <div className={styles.publication}>
      <div className={styles.venue}>{publication.venue}</div>
      <div className={styles.title}>{publication.title}</div>
      <div className={styles.authors}>
        {publication.authors.slice(0, -1).join(',') + ', and ' + publication.authors[-1]}
      </div>
      <div className={styles.full_venue}>{publication.full_venue}</div>
      <div className={styles.supplements}>
        {publication.pdf && publication.pdf !== '' ? (
          <Supplement kind="pdf" href={publication.pdf} />
        ) : null}
        {publication.code && publication.code !== '' ? (
          <Supplement kind="code" href={publication.code} />
        ) : null}
        {publication.slide && publication.slide !== '' ? (
          <Supplement kind="slide" href={publication.slide} />
        ) : null}
        {publication.video && publication.video !== '' ? (
          <Supplement kind="video" href={publication.video} />
        ) : null}
      </div>
    </div>
  )
}

export default Publication
