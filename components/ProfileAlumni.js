import styles from '@/css/components/AlumniProfile.module.css'

import SocialIcon from './SocialIcon'

import EmailIcon from '@mui/icons-material/Email'
import HomeIcon from '@mui/icons-material/Home'

const Alumni = ({ name, program, year, position, email, homepage }) => (
  <div className={styles.alumni}>
    <div className={styles.alumni_body}>
      <div className={styles.alumni_name}>{name}</div>
      <div className={styles.alumni_program}>
        <div className={styles.alumni_program_div}>{program}</div>
        <div className={styles.alumni_program_div}>{year}</div>
      </div>
      <div className={styles.alumni_position}>{position}</div>
    </div>
    <div className={styles.alumni_footer}>
      <SocialIcon href={email}>
        <EmailIcon style={{ color: '#404040' }} />
      </SocialIcon>
      <SocialIcon href={homepage}>
        <HomeIcon style={{ color: '#404040' }} />
      </SocialIcon>
    </div>
  </div>
)

export default Alumni
