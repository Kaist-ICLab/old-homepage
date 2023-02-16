import { useState } from 'react'

import { Image, Link } from './MDXComponents'

import headerNavLinks from '@/data/headerNavLinks'
import Menu from '@/data/Icons/menu.svg'

import styles from '@/css/components/Header.module.css'

export default function Header() {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (document.body.clientWidth < 1200) {
        if (status) {
          document.body.style.overflow = 'auto'
        } else {
          // Prevent scrolling
          document.body.style.overflow = 'hidden'
        }
        return !status
      }
    })
  }
  return (
    <>
      <div className={styles.header_position} />
      <div className={styles.header_wrapper}>
        <header className={styles.header}>
          <Link href="/" className={styles.logo}>
            <Image
              alt="logo image"
              key={'logo'}
              src={'/static/images/logo.png'}
              layout="fixed"
              width="140px"
              height="40px"
            />
            <Image
              alt="text along with logo which is 'Interactive Computing Lab'"
              key={'text'}
              src={'/static/images/text.png'}
              layout="fixed"
              width="200px"
              height="40px"
            />
          </Link>
          <button
            type="button"
            className={[styles.mobile_nav_toggle, navShow ? styles.toggled : ''].join(' ')}
            onClick={onToggleNav}
          >
            <Menu />
          </button>
          <div className={[styles.nav_container, navShow ? styles.show_nav : ''].join(' ')}>
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className={styles.nav_link}
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </header>
      </div>
    </>
  )
}
