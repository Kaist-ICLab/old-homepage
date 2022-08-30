import Link from 'next/link'

import styles from '@/css/components/Link.module.css'

const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return (
    <a
      className={styles.external_link}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    />
  )
}

export default CustomLink
