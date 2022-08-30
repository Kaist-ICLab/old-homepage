import { PageSEO } from '@/components/SEO'

import { membersData, alumnis } from '@/data/membersData'
import Tabs from '@/components/Tab'
import { H1, H2 } from '@/components/Title'

import styles from '@/css/pages/members.module.css'
import DetailedProfile from '@/components/ProfileDetail'
import Alumni from '@/components/ProfileAlumni'

const tabList = ['Current', 'Alumni']
const CurrentPosition = ['Director', 'Post Doc', 'PhD', 'Master']

export default function Members() {
  const CurrentMember = (
    <div className={styles.members_container}>
      {CurrentPosition.map((position) => (
        <div key={position} className={styles.position_container}>
          <H2>{position}</H2>
          <ul className={styles.member_list}>
            {membersData.map((member) => (
              <div key={member.name}>
                {member.position === position ? (
                  <DetailedProfile
                    key={member.name}
                    imgsrc={member.image}
                    name={member.name}
                    position={member.status}
                    research_interests={member.research_interest.slice(0, 3)}
                    email={member.email}
                    homepage={member.homepage}
                    google_scholar={member.scholar}
                    github={member.github}
                  />
                ) : null}
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )

  const AlumniMember = (
    <div className={styles.members_container}>
      {
        <ul className={styles.alumni_list}>
          {alumnis.map((member) => (
            <Alumni
              key={member.name}
              name={member.name}
              program={member.program}
              year={member.graduated}
              position={member.occupation}
              email={member.email}
              homepage={member.homepage}
            />
          ))}
        </ul>
      }
    </div>
  )

  return (
    <>
      <PageSEO title={`Members`} description={'Members of Interactive Computing Lab'} />
      <div className={styles.container}>
        <H1>Members</H1>
        <Tabs
          tabList={tabList}
          childrenList={tabList.map((tab, idx) => (idx == 0 ? CurrentMember : AlumniMember))}
        />
      </div>
    </>
  )
}
