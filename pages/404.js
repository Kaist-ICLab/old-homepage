import { PageSEO } from '@/components/SEO'
import { Link } from '@/components/MDXComponents'

import siteMetadata from '@/data/siteMetadata'
import styles from '@/css/pages/404.module.css'

export default function FourZeroFour() {
  return (
    <div className={styles.container}>
      <PageSEO title={`Page Not Found - ${siteMetadata.title}`} />

      <h1 className={styles.h1}>404</h1>
      <div className={styles.desc}>
        <div className={styles.message}>Sorry, we couldn't find this page!</div>
        <Link className={styles.goback} href="/">
          Back to Hompage
        </Link>
      </div>
    </div>
  )
}
