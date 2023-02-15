import siteMetadata from '@/data/siteMetadata'
import { Image, Link } from './MDXComponents'

import styles from '@/css/components/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.affiliates}>
        <Link className={styles.image_kaist} href="https://cs.kaist.ac.kr">
          <Image
            src="/static/images/affiliates/CS@KAIST.svg"
            alt="KAIST LOGO"
            layout="fill"
            objectFit="contain"
          />
        </Link>
        <Link className={styles.image_hci} href="https://hci.kaist.ac.kr">
          <Image
            src="/static/images/affiliates/HCI@KAIST.svg"
            alt="HCI KAIST LOGO"
            layout="fill"
            objectFit="contain"
          />
        </Link>
      </div>
      <div className={styles.footer_info}>
        <div className={styles.location}>{siteMetadata.location}</div>
        <div className={styles.powered}>
          {`© ${new Date().getFullYear()} ` + siteMetadata.fullName}
        </div>
      </div>
    </footer>
  )
}
