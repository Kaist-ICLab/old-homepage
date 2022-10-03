import { PageSEO } from '@/components/SEO'
import Publication from '@/components/Publication'

import publicationData from '@/data/publicationData'

import styles from '@/css/pages/publications.module.css'
import { H2, H3 } from '@/components/MDXComponents'

const publicationDataSorted = Object.values(publicationData).sort((a, b) => b.year - a.year)

const LAST = publicationDataSorted[0].year
const FIRST = publicationDataSorted[publicationDataSorted.length - 1].year
const n_year = LAST - FIRST + 1

export default function Publications() {
  return (
    <div className={styles.container}>
      <PageSEO title={`Publications`} description={'Publications of Interactive Computing Lab'} />
      <H2>Publications</H2>
      <div className={styles.publication_list}>
        {[...Array(n_year).keys()].map((idx) => {
          const year = LAST - idx
          return (
            <>
              <H3>{year}</H3>
              {publicationDataSorted.map((elem) =>
                elem.year === year ? <Publication key={elem.title} publication={elem} /> : null
              )}
            </>
          )
        })}
      </div>
    </div>
  )
}

// export default function Publications() {
//   const PubList = tabList.map((tab, idx) => {
//     const start = idx == 0 ? LAST : LAST - n_recent
//     const last = idx == 0 ? LAST - n_recent + 1 : FIRST
//     const n_year = start - last + 1
//     return (
//       <div key={tab} className={styles.publicaiton_container}>
//         {[...Array(n_year).keys()]
//           .map((i) => start - i)
//           .map((year) => (
//             <div key={year} className={styles.year_container}>
//               <H2>{year}</H2>
//               <ul className={styles.publication_year_list}>
//                 {publicationsData.map((publication) =>
//                   publication.YEAR === year ? (
//                     <Publication
//                       key={publication.TITLE}
//                       title={publication.TITLE}
//                       authors={publication.AUTHORS}
//                       published={publication.PUBLISHED}
//                       download={publication.LINK}
//                       video={publication.VIDEO}
//                     />
//                   ) : null
//                 )}
//               </ul>
//             </div>
//           ))}
//       </div>
//     )
//   })

//   return (
//     <>
//       <PageSEO title={`Publications`} description={'Publications of Interactive Computing Lab'} />
//       <div className={styles.container}>
//         <H1>Publications</H1>
//         <Tabs tabList={tabList} childrenList={tabList.map((tab, idx) => PubList[idx])} />
//       </div>
//     </>
//   )
// }
