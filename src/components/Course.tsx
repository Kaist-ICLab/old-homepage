import Supplement from '@/components/PublicationSupplement'
import { Course } from '@/data/courses'

import styles from '@/styles/components/Course.module.css'
interface CourseProp{
    course: Course
}

const Course: React.FC<CourseProp> = ({ course }) => (
  <div className={styles.course}>
    <div className={styles.code}>{course.code}</div>
    <div className={styles.title}>{course.title}</div>
    {course.syllabus && course.syllabus !== '' ? (
      <Supplement kind="syllabus" href={course.syllabus} />
    ) : null}
  </div>
)

export default Course
