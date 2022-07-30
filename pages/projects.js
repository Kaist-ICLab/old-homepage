import projectsData from '@/data/projectsData'
import Card from '@/components/ProjectCard'
import { PageSEO } from '@/components/SEO'
import { useState } from 'react'

const tabList = ['Ongoing', 'Past']

export default function Projects() {
  const [activeIdx, setActive] = useState(0)

  return (
    <>
      <PageSEO
        title={`Projects`}
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
            Projects
          </h1>
        </div>
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center space-x-4 ">
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
            <div className="-m-4 my-3 flex flex-wrap">
              {projectsData.map((project) =>
                project.status === tab ? (
                  <Card
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    imgSrc={project.imgSrc}
                    duration={project.duration}
                  />
                ) : null
              )}
            </div>
          ) : null
        )}
      </div>
    </>
  )
}
