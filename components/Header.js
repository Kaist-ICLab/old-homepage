import headerNavLinks from '@/data/headerNavLinks'

import Image from './Image'
import Link from './Link'
import MobileNav from './MobileNav'

import styles from '@/css/components/Header.module.css'

const isExternalLink = (href) => !(href.startsWith('/') || href.startsWith('#'))

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.center_wrapper}>
        <Link href="/" className={styles.image_holder}>
          <Image src="/static/images/logo.svg" alt="ICLab" layout="fill" />
        </Link>
        <div className={styles.nav_container}>
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`${styles.nav_link} ${
                isExternalLink(link.href) ? styles.external_link : ''
              }`}
            >
              {link.title}
            </Link>
          ))}
        </div>
        {/* <MobileNav /> */}
      </div>
    </header>
  )
}
