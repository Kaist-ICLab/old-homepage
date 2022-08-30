import Link from './Link'
import styles from '@/css/components/IconButton.module.css'

const IconButton = ({ link, text, children }) => (
  <Link href={link} className={styles.icon_button}>
    <div className={styles.icon_holder}>{children}</div>
    <div className={styles.button_name}>{text}</div>
  </Link>
)

export default IconButton
