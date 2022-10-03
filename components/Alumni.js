import ContactIcon from './ContactIcon'

import styles from '@/css/components/Alumni.module.css'

export default function Alumni({ alumni }) {
  return (
    <div className={styles.alumni}>
      <ContactIcon kind="mail" href={alumni.mail} />
      <div className={styles.name}>
        {alumni.name + (alumni.korean_name ? `(${alumni.korean_name})` : '')}
      </div>
      <div className={styles.program}>
        {alumni.program}
        {alumni.graduated ? ', ' + alumni.graduated : ''}
      </div>
      {alumni.current_position && alumni.current_position !== '' ? (
        <div className={styles.current_position}>{alumni.current_position}</div>
      ) : null}
    </div>
  )
}
