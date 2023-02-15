import { PageSEO } from '@/components/SEO'
import { H2, H3 } from '@/components/MDXComponents'

import memberData from '@/data/memberData'
import styles from '@/css/pages/members.module.css'

import Member from '@/components/Member'
import Alumni from '@/components/Alumni'

const programs = ['Director', 'Postdoc', 'PhD Program', 'Master Program']

const currentMembers = Object.values(memberData).filter((elem) => !elem.isAlumni)
const alumnis = Object.values(memberData).filter((elem) => 
  elem.isAlumni | elem.program.length > 1 )

export default function Members() {
  return (
    <div className={styles.container}>
      <H2>Members</H2>
      <div className={styles.member_list}>
        {programs.map((program) => {
          return (
            <div key={program} className={styles.program}>
              <H3>{program}</H3>
              <div className={styles.program_member}>
                {currentMembers
                  .filter((member) => member.current_position === program)
                  .map((member) => (
                    <Member key={member.name} member={member} />
                  ))}
              </div>
            </div>
          )
        })}
      </div>
      <div className={styles.alumnis}>
        <H3>Alumni</H3>
        <div className={styles.alumni_list}>
          {alumnis.map((alumni) => (
            <Alumni key={alumni.name} alumni={alumni} />
          ))}
        </div>
      </div>
    </div>
  )
}
