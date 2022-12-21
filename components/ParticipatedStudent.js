import styles from '@/css/components/ParticipatedStudent.module.css'
import Image from './Image'
import ContactIcon from './ContactIcon'

export default function ParticipatedStudent({ member }) {
  return (
    <div className={styles.participated_student}>
      <div className={styles.image_wrapper}>
        <Image
          src={member.image ? member.image : '/static/images/members/anony.jpg'}
          alt={member.name}
          width={180}
          height={200}
          // layout="fill"
          // object="fit"
        />
      </div>
      <div className={styles.contacts}>
        {member.homepage && member.homepage !== null ? <ContactIcon kind="homepage" /> : null}
        {member.github && member.github !== null ? <ContactIcon kind="github" /> : null}
        {member.scholar && member.scholar !== null ? <ContactIcon kind="scholar" /> : null}
        {member.email && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(member.mail) ? (
          <ContactIcon kind="mail" />
        ) : null}
      </div>
      <div className={styles.name}>{member.name}</div>
      <div className={styles.position}>{member.position}</div>
    </div>
  )
}
