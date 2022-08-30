import IconButton from './IconButton'

import DownloadIcon from '@mui/icons-material/Download'
import VideocamIcon from '@mui/icons-material/Videocam'

import styles from '@/css/components/Publication.module.css'

const Publication = ({ title, authors, published, download, video }) => (
  <div className={styles.publication}>
    <div className={styles.title}>{title}</div>
    <div className={styles.authors}>{authors.join(', ')}</div>
    <div className={styles.published}>{published}</div>
    <div className={styles.tag_container}>
      {download && download !== '' ? (
        <IconButton text="Download" link={download}>
          <DownloadIcon
            style={{
              color: '#FFFFFF',
            }}
          />
        </IconButton>
      ) : null}
      {video && video !== '' ? (
        <IconButton text="Video" link="/">
          <VideocamIcon
            style={{
              color: '#FFFFFF',
            }}
          />
        </IconButton>
      ) : null}
    </div>
  </div>
)

export default Publication
