import styles from '../css/components/Course.module.css'
import IconButton from './IconButton'

import FeedIcon from '@mui/icons-material/Feed'

const Course = ({ code, title, syllabus }) => (
  <div className={styles.course}>
    <div className={styles.course_body}>
      <div className={styles.course_code}>{code}</div>
      <div className={styles.course_colon}>:</div>
      <div className={styles.course_title}>{title}</div>
    </div>
    {(syllabus !== '') & (syllabus !== null) ? (
      <div className={styles.course_footer}>
        <IconButton link={syllabus} text="Syllabus">
          <FeedIcon style={{ color: '#FFFFFF' }} />
        </IconButton>
      </div>
    ) : null}
  </div>
)

export default Course
