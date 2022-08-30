import Image from './Image'
import SocialIcon from './SocialIcon'

import HomeIcon from '@mui/icons-material/Home'
import GitHubIcon from '@mui/icons-material/GitHub'
import SchoolIcon from '@mui/icons-material/School'
import EmailIcon from '@mui/icons-material/Email'

import styles from '@/css/components/ProfileDetail.module.css'

const DetailedProfile = ({
  imgsrc,
  name,
  position,
  research_interests,
  email,
  google_scholar,
  homepage,
  github,
}) => (
  <div className={styles.detail_profile}>
    <div className={styles.left_wrapper}>
      <div className={styles.image_holder}>
        <Image src={imgsrc} alt="profile" layout="fill" objectFit="contain" />
      </div>
      <div className={styles.contact_info}>
        {email ? (
          <SocialIcon href={email}>
            <EmailIcon style={{ color: '#404040' }} />
          </SocialIcon>
        ) : null}
        {homepage ? (
          <SocialIcon href={homepage}>
            <HomeIcon style={{ color: '#404040' }} />
          </SocialIcon>
        ) : null}
        {github ? (
          <SocialIcon href={github}>
            <GitHubIcon style={{ color: '#404040' }} />
          </SocialIcon>
        ) : null}
        {google_scholar ? (
          <SocialIcon href={google_scholar}>
            <SchoolIcon style={{ color: '#404040' }} />
          </SocialIcon>
        ) : null}
      </div>
    </div>
    <div className={styles.right_wrapper}>
      <div className={styles.name}>{name}</div>
      <div className={styles.position}>{position}</div>
      {research_interests.length > 0 ? (
        <div className={styles.research_interest_container}>
          <div className={styles.research_interest_title}>Research Interest</div>
          <ul className={styles.research_interest_list}>
            {research_interests.map((interest) => (
              <li key={interest} className={styles.research_interest_elem}>
                <span>{interest}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  </div>
)

export default DetailedProfile
