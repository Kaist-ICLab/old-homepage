import Course from '@/components/Course'
import { genPageMetadata } from '@/components/SEO'

import courses from '@/data/courses'
import styles from '@/styles/pages/courses.module.css'

const courses_sorted = courses.sort((a, b) => b.year - a.year)
const LAST = courses_sorted[0].year
const FIRST = courses_sorted[courses_sorted.length - 1].year
const n_year = LAST - FIRST + 1
const years: number[] = Array.from({ length: n_year }, (_, i) => LAST - i);

export const metadata = genPageMetadata({ title: "Courses" });

export default function Courses() {
  return (
    <div className={styles.container}>
      <h2>Courses</h2>
      {years.map((year) => {
        return (
          <div key={year} className={styles.years}>
            <h3>{year}</h3>
            {['Fall', 'Spring'].map((semester) => {
              const matchedcourses = courses_sorted.filter(
                course => course.year === year && course.semester === semester
              )
              return matchedcourses.length != 0 ? (
                <div key={year.toString() + semester}>
                  <h4>{semester}</h4>
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
