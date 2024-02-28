import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import {Icon} from "@iconify/react";

import meta from "@/data/meta";


import styles from '@/styles/components/layout/Header.module.css'

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
      return status
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
              src={'/assets/header/logo_icon.png'}
              width={140}
              height={40}
            />
            <div>
              <Image
                alt="text along with logo which is 'Interactive Computing Lab'"
                key={'text'}
                src={'/assets/header/logo_text.png'}
                width={200}
                height={40}
              />
            </div>
          </Link>
          <button
            type="button"
            className={[styles.mobile_nav_toggle, navShow ? styles.toggled : ''].join(' ')}
            onClick={() => {
              onToggleNav();
            }}
          >
            <Icon icon={"mdi:menu"} width={24} height = {24}/>
          </button>
          <div className={[styles.nav_container, navShow ? styles.show_nav : ''].join(' ')}>
            {meta["menus"].map((link: any) => {
              return <Link
                key={link.title}
                href={link.href}
              >
                <div onClick={() => {
                  onToggleNav();
                }}
                className={styles.navlink}>{link.title} </div>
              </Link>
            })}
          </div>
        </header>
      </div>
    </>
  )
}
