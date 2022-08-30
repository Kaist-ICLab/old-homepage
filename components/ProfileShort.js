import styles from '@/css/components/ShortProfile.module.css'
import Image from './Image'

const ShortProfile = ({ imgsrc, name, position }) => (
  <div className={styles.profile}>
    <div className={styles.img_container}>
      <Image alt={name} src={imgsrc} layout="fill" objectFit="contain" />
    </div>
    <div className={styles.position}>{position}</div>
    <div className={styles.name}>{name}</div>
  </div>
)

export default ShortProfile
