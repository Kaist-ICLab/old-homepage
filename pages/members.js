import { useState } from 'react'
import Member from '@/components/Member'
import { PageSEO } from '@/components/SEO'
import membersData from '@/data/membersData'

const tabList = ['Director', 'Post-Doc', 'PhD', 'Master', 'Alumni']

export default function Members() {
  const [activeIdx, setActive] = useState(0)

  return (
    <>
      <PageSEO title={`Members`} description={'Members on the Interactive Computing Lab'} />
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
            Members
          </h1>
        </div>
        <div className="container">
          <div className="md:flex md:items-center md:justify-between md:space-x-8">
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
              <div key={`panel_${idx}`} className="-m-4 flex flex-wrap">
                {membersData.map((member) =>
                  member.position === tab ? (
                    <Member
                      key={member.name}
                      name={member.name}
                      image={
                        !Object.prototype.hasOwnProperty.call(member, 'image') |
                        (member.image === '')
                          ? '/static/profiles/profile.png'
                          : member.image
                      }
                      position={member.status}
                      email={member.email}
                      github={member.github}
                      homepage={member.homepage}
                    />
                  ) : null
                )}
              </div>
            ) : null
          )}
          {/* {
            tabList.map((d, idx)=>(
              idx === activeIdx? 
              <div className="-m-4 flex flex-wrap" key={idx}>
                {membersData.map((data) => (
                  data.status === d.name?
                    <Member
                      key={data.name}
                      name={data.name}
                      image = {(!data.hasOwnProperty('image')) | (data.image ==="")?
                        "/static/profiles/profile.png":
                        data.image
                      }
                      position={data.position}
                      email = {data.email}
                      github = {data.github}
                    />
                    : null
                )}
              </div>:
              null
            ))
          } */}
        </div>

        {/* <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {membersData.map((d) => (
              <Member
                key={d.name}
                name={d.name}
                image = {(!d.hasOwnProperty('image')) | (d.image ==="")?
                  "/static/profiles/profile.png":
                  d.image
                }
                position={d.position}
                email = {d.email}
                github = {d.github}
              />
            ))}
          </div>
              </div>*/}
      </div>
    </>
  )
}
