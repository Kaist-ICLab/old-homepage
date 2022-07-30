import Link from 'next/link'

const BoxTag = ({ text, href }) => {
  return (
    <Link href={href}>
      <a className="rounded bg-gray-500 px-2 py-1 text-sm font-bold text-white hover:bg-gray-600">
        {text}
      </a>
    </Link>
  )
}

export default BoxTag
