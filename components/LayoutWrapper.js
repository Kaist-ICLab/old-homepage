import SectionContainer from './SectionContainer'
import Footer from './Footer'
import Header from './Header'

import styles from '@/css/components/LayoutWrapper.module.css'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
