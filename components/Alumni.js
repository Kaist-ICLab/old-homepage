import ContactIcon from './ContactIcon'

import styles from '@/css/components/Alumni.module.css'

export default function Alumni({ alumni }) {
  const alumni_englishname = alumni.name ? alumni.name : '???'
  const alumni_currentposition = alumni.current_position ? alumni.current_position : ''
  return (
    <div className={styles.alumni}>
      <ContactIcon kind="mail" href={alumni.email} />
      <div className={styles.desc}>
        <div className={styles.name}>{alumni_englishname}</div>
        <div className={styles.current_position}>
          {alumni.isAlumni ? alumni_currentposition : alumni_currentposition + ' at ICLab'}
        </div>
        <div className={styles.program}>
          {alumni.isAlumni
            ? alumni.program.map((pro, idx) => {
                return (
                  <div key={`${alumni.name}-${idx}`}>
                    {pro[0]} {pro[1]}
                  </div>
                )
              })
            : alumni.program.slice(1).map((pro, idx) => {
                return (
                  <div key={`${alumni.name}-${idx}`}>
                    {pro[0]} {pro[1]}
                  </div>
                )
              })}
        </div>
      </div>
    </div>
  )
}
