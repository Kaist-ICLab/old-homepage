import Image from './Image'
import SocialIcon from './social-icons'

const Member = ({ name, position, image, email, github, homepage }) => (
  <div className="mx-10 flex flex-col items-center pt-8">
    <Image
      src={image}
      alt="avatar"
      width="168px"
      height="168px"
      className="h-48 w-48 rounded-full"
    />
    <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
    <div className="text-gray-500 dark:text-gray-400">{position}</div>
    <div className="flex space-x-3 pt-6">
      <SocialIcon kind="mail" href={`mailto:${email}`} />
      <SocialIcon kind="github" href={github} />
      <SocialIcon kind="homepage" href={homepage} />
    </div>
  </div>
)

export default Member
