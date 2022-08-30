import Course from '@/components/Course'
import { PageSEO } from '@/components/SEO'
import { H1, H2 } from '@/components/Title'

import styles from '@/css/pages/courses.module.css'
import coursesData from '@/data/coursesData'

const coursesDataSorted = coursesData.sort((a, b) => b.YEAR - a.YEAR)
const START = coursesDataSorted[0].YEAR
const LAST = coursesDataSorted[coursesDataSorted.length - 1].YEAR

export default function Courses() {
  return (
    <>
      <PageSEO title={`Courses`} description={'Courses provided by Interactive Computing Lab'} />
      <div className={styles.container}>
        <H1>Courses</H1>
        {[...Array(START - LAST + 1).keys()]
          .map((i) => START - i)
          .map((year) => (
            <div key={year} className={styles.year_container}>
              <H2>{year}</H2>
              {['Fall', 'Spring'].map((semester) =>
                coursesData.filter(
                  (course) => (course.SEMESTER === semester) & (course.YEAR === year)
                ).length > 0 ? (
                  <div className={styles.semester_container}>
                    <h3 className={styles.h3}>{semester}</h3>
                    <ul className={styles.course_container}>
                      {coursesData.map((course) =>
                        (course.SEMESTER === semester) & (course.YEAR === year) ? (
                          <li key={`${course.YEAR}_${course.SEMESTER}_${course.CODE}`}>
                            <Course
                              code={course.CODE}
                              syllabus={course.Link}
                              title={course.TITLE}
                            />
                          </li>
                        ) : null
                      )}
                    </ul>
                  </div>
                ) : null
              )}
            </div>
          ))}
      </div>
    </>
  )
}
