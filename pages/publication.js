// import siteMetadata from '@/data/siteMetadata'
import publicationsData from '@/data/publicationsData'
// import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import BoxTag from '@/components/BoxTag'
import { useState } from 'react'

const current = new Date().getFullYear()
const tabList = [current, current - 1, current - 2, 'Past']

export default function Projects() {
  const [activeIdx, setActive] = useState(0)
  return (
    <>
      <PageSEO
        title={`Publications`}
        description={'Projects conducted on the Interactive Computing Lab'}
      />
      <div className="container">
        <div
          className="flex justify-start
        space-y-2 pt-6 pb-8 
        md:space-y-5"
        >
          <h1
            className="border-b-2 border-primary-200 pb-2 text-2xl 
              font-extrabold tracking-tight text-gray-900
              dark:text-gray-100  
              sm:text-3xl md:text-4xl xl:text-5xl"
          >
            Publications
          </h1>
        </div>
        <div className="container">
          <div className="mb-12 md:flex md:items-center md:justify-between md:space-x-8">
            <div className="flex items-center space-x-4 overflow-y-auto whitespace-nowrap md:max-w-lg lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl">
              {tabList.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`${
                    idx === activeIdx ? 'bg-primary-700' : 'bg-primary-400'
                  } rounded py-2 px-4 font-bold text-white hover:bg-primary-700`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          {tabList.map((tab, idx) =>
            idx === activeIdx ? (
              <div className="-m-4 flex flex-wrap">
                {publicationsData.map((publication) =>
                  publication.year === tab ? (
                    <div key={publication.title}>
                      <div className="text-xl font-bold">{publication.title}</div>
                      <div className="text-base">{publication.authors}</div>
                      <div className="text-base italic">{publication.published}</div>
                      <div className="mt-2 flex">
                        <BoxTag text="link" href={publication.links}></BoxTag>
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  )
}
