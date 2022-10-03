import Footer from './Footer'
import Header from './Header'

import styles from '@/css/components/LayoutWrapper.module.css'

const LayoutWrapper = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutWrapper
