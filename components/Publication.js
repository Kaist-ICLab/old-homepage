import Supplement from './Supplement'

import styles from '@/css/components/Publication.module.css'

const Publication = ({ publication }) => {
  var author_string = ''
  if (publication.authors.length > 2) {
    author_string =
      publication.authors.slice(0, -1).join(', ') +
      ', and ' +
      publication.authors[publication.authors.length - 1]
  } else if (publication.authors.length === 2) {
    author_string = publication.authors[0] + ' and ' + publication.authors[1]
  } else {
    author_string = publication.authors[0]
  }
  return (
    <div className={styles.publication}>
      <div className={styles.venue}>{publication.venue}</div>
      <div className={styles.title}>{publication.title}</div>
      <div className={styles.authors}>{author_string}</div>
      <div className={styles.full_venue}>
        {publication.full_venue}
        {publication.published !== undefined && !publication.published ? ' (To appear)' : ''}
      </div>
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
