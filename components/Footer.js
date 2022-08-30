import siteMetadata from '@/data/siteMetadata'
import Image from './Image'

import styles from '../css/components/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.image_holder}>
        <Image src="/static/images/kaist.png" alt="KAIST LOGO" layout="fill" />
      </div>
      <div className={styles.footer_info}>
        <div>{siteMetadata.location}</div>
        <div>{`© ${new Date().getFullYear()} ` + siteMetadata.fullName}</div>
      </div>
    </footer>
  )
}
