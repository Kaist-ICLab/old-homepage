import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div
        className="divide-y divide-gray-200 
          dark:divide-gray-700"
      >
        <div
          className="
          flex justify-center space-y-2 pt-6 pb-8 
          md:space-y-5"
        >
          <h1
            className="
              border-b-2 border-primary-200 pb-2 text-2xl 
              font-extrabold tracking-tight text-gray-900
              dark:text-gray-100  
              sm:text-3xl md:text-4xl xl:text-5xl"
          >
            Welcome to Interactive Computing Lab!
          </h1>
        </div>
        <Image
          src="/static/images/index_main.svg"
          alt="Main Page Picture"
          width="1200px"
          height="600px"
          className="full h-24 w-48 bg-white"
        />
        <div className="flex flex-col items-center space-y-2 pt-6 pb-8 md:space-y-5">
          <h1
            className="
              border-b-2 border-primary-200 pb-2 text-2xl 
              font-extrabold tracking-tight text-gray-900
              dark:text-gray-100  
              sm:text-3xl md:text-4xl xl:text-5xl"
          >
            Research Interest
          </h1>
          <p>
            KAIST Interactive Computing Lab’s major research area is positive computing, which aims
            to use computing technologies to support wellbeing and human potential. In particular,
            we focused on leveraging ubiquitous computing technologies that have sensing,
            networking, and computing capability (e.g., smartphones, wearables, and Internet of
            Things) to better understand and deal with threats to the well-being of users, ranging
            from technology dependence (e.g., addiction, productivity loss, technostress) to
            mental/physical/social problems (e.g., lack of physical activity, social isolation, and
            depression). We as researchers in the HCI field, are well aware of such threats to
            users’ well-being and have always wanted to make not only scholarly contributions but
            also societal impact by making our research outcomes accessible to the people who are in
            need. For this reason, the major research efforts undertaken by us have been on
            designing, building, and evaluating novel positive computing systems that help improve
            productivity and physical activity using interactive technologies.
          </p>
        </div>
      </div>
    </>
  )
}
