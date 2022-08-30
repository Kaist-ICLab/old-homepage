import { PageSEO } from '@/components/SEO'
import Tabs from '@/components/Tab'
import Publication from '@/components/Publication'
import { H1, H2 } from '@/components/Title'

import publicationsData from '@/data/publicationsData'

import styles from '@/css/pages/publications.module.css'

const publicationsDataSorted = publicationsData.sort((a, b) => b.YEAR - a.YEAR)

const current = new Date().getFullYear()
const n_recent = 5
const tabList = [`Recent ${n_recent} Years`, 'Past']
const LAST = publicationsDataSorted[0].YEAR
const FIRST = publicationsDataSorted[publicationsData.length - 1].YEAR

export default function Publications() {
  const PubList = tabList.map((tab, idx) => {
    const start = idx == 0 ? LAST : LAST - n_recent
    const last = idx == 0 ? LAST - n_recent + 1 : FIRST
    const n_year = start - last + 1
    return (
      <div key={tab} className={styles.publicaiton_container}>
        {[...Array(n_year).keys()]
          .map((i) => start - i)
          .map((year) => (
            <div key={year} className={styles.year_container}>
              <H2>{year}</H2>
              <ul className={styles.publication_year_list}>
                {publicationsData.map((publication) =>
                  publication.YEAR === year ? (
                    <Publication
                      key={publication.TITLE}
                      title={publication.TITLE}
                      authors={publication.AUTHORS}
                      published={publication.PUBLISHED}
                      download={publication.LINK}
                      video={publication.VIDEO}
                    />
                  ) : null
                )}
              </ul>
            </div>
          ))}
      </div>
    )
  })

  return (
    <>
      <PageSEO title={`Publications`} description={'Publications of Interactive Computing Lab'} />
      <div className={styles.container}>
        <H1>Publications</H1>
        <Tabs tabList={tabList} childrenList={tabList.map((tab, idx) => PubList[idx])} />
      </div>
    </>
  )
}
