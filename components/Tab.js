import { useState } from 'react'

import styles from '@/css/components/Tab.module.css'

const Tabs = ({ tabList, childrenList }) => {
  const [activeIdx, setActive] = useState(0)
  return (
    <>
      <div className={styles.container}>
        <div className={styles.tab}>
          {tabList.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`${styles.button} ${idx == activeIdx ? styles.active : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>
        {tabList.map((tab, idx) => (idx === activeIdx ? childrenList[idx] : null))}
      </div>
    </>
  )
}

export default Tabs
