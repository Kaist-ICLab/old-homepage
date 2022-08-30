import styles from '@/css/components/Title.module.css'

export const H1 = ({ children }) => {
  return (
    <div className={styles.h1_wrapper}>
      <h1 className={styles.h1}>{children}</h1>
      <div className={styles.h1_deco}></div>
    </div>
  )
}

export const H2 = ({ children }) => {
  return (
    <div className={styles.h2_wrapper}>
      <h2 className={styles.h2}>{children}</h2>
      <div className={styles.h2_deco}></div>
    </div>
  )
}
