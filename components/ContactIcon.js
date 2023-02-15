import Github from '@/data/Icons/github-main.svg'
import Scholar from '@/data/Icons/scholar.svg'
import Mail from '@/data/Icons/email.svg'
import Homepage from '@/data/Icons/home.svg'

import {Link} from './MDXComponents'

import styles from '@/css/components/ContactIcon.module.css'

const icons = {
  homepage: Homepage,
  github: Github,
  scholar: Scholar,
  mail: Mail,
}

export default function ContactIcon({ kind, href }) {
  const SVG = icons[kind]
  return (
    <Link href={href} className={styles.contact_icon}>
      <SVG className={styles.icon} />
    </Link>
  )
}
