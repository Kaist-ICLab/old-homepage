import meta from "@/data/meta"
import Image from "next/image"
import Link from "next/link"

import styles from '@/styles/components/layout/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.affiliates}>
        <Link className={styles.image_kaist} href="https://cs.kaist.ac.kr">
          <Image
            src="/assets/footer/CS@KAIST.svg"
            alt="KAIST LOGO"
            style={{ objectFit: "contain" }}
            fill

          />
        </Link>
        <Link className={styles.image_hci} href="https://hci.kaist.ac.kr">
          <Image
            src="/assets/footer/HCI@KAIST.svg"
            alt="HCI KAIST LOGO"
            style={{ objectFit: "contain" }}
            fill

          />
        </Link>
      </div>
      <div className={styles.footer_info}>
        <div className={styles.location}>{meta.location}</div>
        <div className={styles.powered}>
          {`© ${new Date().getFullYear()} ` + meta.fullName}
        </div>
      </div>
    </footer>
  )
}
