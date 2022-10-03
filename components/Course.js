import Supplement from './Supplement'

import styles from '../css/components/Course.module.css'

const Course = ({ course }) => (
  <div className={styles.course}>
    <div className={styles.code}>{course.code}</div>
    <div className={styles.title}>{course.title}</div>
    {course.syllabus && course.syllabus !== '' ? (
      <Supplement kind="syllabus" href={course.syllabus} />
    ) : null}
  </div>
)

export default Course
