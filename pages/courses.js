import Course from '@/components/Course'
import { PageSEO } from '@/components/SEO'
import { H2, H3, H4 } from '@/components/MDXComponents'

import styles from '@/css/pages/courses.module.css'
import courseData from '@/data/courseData'

const courseDataSorted = courseData.sort((a, b) => b.year - a.year)
const START = courseDataSorted[0].year
const LAST = courseDataSorted[courseDataSorted.length - 1].year
const n_year = START - LAST + 1

export default function Courses() {
  return (
    <div className={styles.container}>
      <PageSEO title={`Courses`} description={'Courses provided by Interactive Computing Lab'} />
      <H2>Courses</H2>
      {[...Array(n_year).keys()].map((idx) => {
        const year = START - idx
        return (
          <div key={year} className={styles.years}>
            <H3>{year}</H3>
            {['Fall', 'Spring'].map((semester) => {
              const matchedcourses = courseDataSorted.filter(
                (course) => course.year === year && course.semester === semester
              )
              return matchedcourses.length != 0 ? (
                <div key={year.toString() + semester}>
                  <H4>{semester}</H4>
                  {matchedcourses.map((course) => (
                    <Course
                      key={course.code + course.year.toString() + course.semester}
                      course={course}
                    />
                  ))}
                </div>
              ) : null
            })}
          </div>
        )
      })}
    </div>
  )
}
