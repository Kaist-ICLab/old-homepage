import Image from './Image'
import ContactIcon from './ContactIcon'

import styles from '@/css/components/Member.module.css'

export default function Member({ member }) {
  return (
    <div className={styles.member}>
      <div className={styles.image_n_contact}>
        <div className={styles.image_wrapper}>
          <Image src={member.image} alt={member.name} layout="fill" object="fit" />
        </div>
        <div className={styles.contacts}>
          {member.homepage && member.homepage !== null ? <ContactIcon kind="homepage" /> : null}
          {member.github && member.github !== null ? <ContactIcon kind="github" /> : null}
          {member.scholar && member.scholar !== null ? <ContactIcon kind="scholar" /> : null}
          {member.email && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(member.mail) ? (
            <ContactIcon kind="mail" />
          ) : null}
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{member.name}</div>
        <div className={styles.position}>{member.position}</div>
        {member.research_interests && member.research_interests.length !== 0 ? (
          <div className={styles.research_interests}>
            <div className={styles.ri_title}>Researh Interest</div>
            <ul className={styles.ri_list}>
              {member.research_interests.map((item) => (
                <li key={item} className={styles.ri_elem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  )
}
