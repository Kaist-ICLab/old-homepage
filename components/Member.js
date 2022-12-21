import Image from './Image'
import ContactIcon from './ContactIcon'

import styles from '@/css/components/Member.module.css'

export default function Member({ member }) {
  return (
    <div className={styles.member}>
      <div className={styles.image_n_contact}>
        <div className={styles.image_wrapper}>
          {/* <Image src={member.image} alt={member.name} layout="fill" object="fit" /> Changed for Image Optimization*/}
          <Image src={member.image} alt={member.name} width={180} height = {200}/>
        </div>
        <div className={styles.contacts}>
          {member.homepage && member.homepage !== null ? (
            <ContactIcon kind="homepage" href={member.homepage} />
          ) : null}
          {member.github && member.github !== null ? (
            <ContactIcon kind="github" href={member.github} />
          ) : null}
          {member.scholar && member.scholar !== null ? (
            <ContactIcon kind="scholar" href={member.scholar} />
          ) : null}
          {member.email && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(member.email) ? (
            <ContactIcon kind="mail" href={member.email} />
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
