import Supplement from '@/components/PublicationSupplement'
import { Publication } from '@/data/publications'
import styles from '@/styles/components/Publication.module.css'

interface PublicationProp{
  publication: Publication
}

const Publication: React.FC<PublicationProp> = ({ publication }) => {
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
  const url = "https://raw.githubusercontent.com/Kaist-ICLab/kaist-iclab.github.io/main/public/files/"
  return (
    <div className={styles.publication}>
      <div className={styles.venue}>{publication.venue_alias}</div>
      <div className={styles.title}>{publication.title}</div>
      <div className={styles.authors}>{author_string}</div>
      <div className={styles.full_venue}>
        {publication.venue}
        {publication.published !== undefined && !publication.published ? ' (To appear)' : ''}
      </div>
      <div className={styles.supplements}>
        {publication.paper && publication.paper !== '' ? (
          <Supplement kind="pdf" href={url+"papers/"+publication.paper} />
        ) : null}
        {publication.code && publication.code !== '' ? (
          <Supplement kind="code" href={publication.code} />
        ) : null}
        {publication.slide && publication.slide !== '' ? (
          <Supplement kind="slide" href={url+"slides/"+publication.slide} />
        ) : null}
        {publication.video && publication.video !== '' ? (
          <Supplement kind="video" href={publication.video} />
        ) : null}
      </div>
    </div>
  )
}

export default Publication
