import styles from '@/styles/components/ParticipatedStudent.module.css'
import { Member } from '@/data/members'
import Image from 'next/image'
import IconButton, { IconType } from './IconButton'

interface ParticipatedStudentProps {
    member: Member
}

const ParticipatedStudent: React.FC<ParticipatedStudentProps> = ({ member }) => {
    const image = member.role === "Alumni"? "/assets/members/Anony.jpg": "/assets/members/" + member.name.split(" ").join("") + ".jpg";
    return (
        <div className={styles.participated_student}>
            <div className={styles.image_wrapper}>
                <Image
                    src={image}
                    alt={member.name}
                    width={180}
                    height={200}
                />
            </div>
            <div className={styles.contacts}>
                {[["homepage", member.homepage], ["github", member.github],
                ["account-school", member.google_scholar], ["email", member.email]].map(([kind, href]) =>
                    <>{href ? <IconButton key={kind} kind={kind as IconType} href={href as string} /> : null}</>
                )}
            </div>
            <div className={styles.name}>{member.name}</div>
            <div className={styles.position}>{member.role}</div>
        </div>
    )
}

export default ParticipatedStudent