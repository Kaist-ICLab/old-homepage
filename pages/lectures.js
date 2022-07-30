import { useState } from 'react'
import { PageSEO } from '@/components/SEO'
import lecturesData from '@/data/lecturesData'

const current = new Date().getFullYear()
const tabList = [current, current - 1, current - 2, 'Past']

export default function Lectures() {
  const [activeIdx, setActive] = useState(0)
  return (
    <>
      <PageSEO
        title={`Lectures`}
        description={'Lectures conducted on the Interactive Computing Lab'}
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
            Lectures
          </h1>
        </div>
        <div className="container">
          <div className="mb-12 md:flex md:items-center md:justify-between md:space-x-8">
            <div className="flex flex-wrap items-center space-x-4 overflow-y-auto whitespace-nowrap md:max-w-lg lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl">
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
          <div>
            {tabList.map((tab, idx) =>
              idx === activeIdx ? (
                <div>
                  {['Spring', 'Fall'].map((semester) => (
                    <>
                      <div className="my-4 text-2xl font-bold">{semester}</div>
                      {lecturesData.map((lecture) =>
                        (lecture.year === tab ||
                          (idx === tabList.length - 1 &&
                            lecture.year <= current - tabList.length + 1)) &&
                        lecture.semester === semester ? (
                          <div key={lecture.name} className="mb-2 flex flex-wrap">
                            <div className="ml-6 text-xl font-medium">
                              {`${lecture.code}: ${lecture.name}`}
                            </div>
                          </div>
                        ) : null
                      )}
                    </>
                  ))}
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  )
}
