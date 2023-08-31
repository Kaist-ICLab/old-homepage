import Github from '@/data/Icons/github-main.svg'
import Scholar from '@/data/Icons/scholar.svg'
import Mail from '@/data/Icons/email.svg'
import Homepage from '@/data/Icons/home.svg'
import { useState } from 'react'
import { Link } from './MDXComponents'

import styles from '@/css/components/ContactIcon.module.css'

const icons = {
  homepage: Homepage,
  github: Github,
  scholar: Scholar,
  mail: Mail,
}

export default function ContactIcon({ kind, href }) {
  const SVG = icons[kind]
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  const clickListener = (event) => {
    if (kind === "mail") {
      event.preventDefault();
      // Copy email to Clipboard
      const copyText = async ()=> {
        try {
          await navigator.clipboard.writeText(href);
          const alertMessage = document.createElement('div');
          alertMessage.className = styles.alert_message;
          alertMessage.textContent = "Email Copied!";
          document.body.appendChild(alertMessage);
          setTimeout(() => {
            alertMessage.remove();
          }, 1500);
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
      }
      copyText()

    } else {
    }

  }

  return (
    <div className={styles.icon_container}
      onClick={clickListener}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Link href={href} className={styles.contact_icon}>
        <SVG className={styles.icon} />
      </Link>
      {isHovered && kind === "mail" ? <span className={styles.hovered_text}>{href}</span> : ''}
    </div>

  )
}
