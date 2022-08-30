import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'
import { H1, H2 } from './Title'

export const MDXComponents = {
  Image,
  a: CustomLink,
  h1: H1,
  h2: H2,
  li: ({ children }) => (
    <li
      style={{
        fontWeight: 400,
        marginBottom: '10px',
        fontSize: '21px',
        lineHeight: '30px',
        listStyleType: 'disc',
      }}
    >
      {children}
    </li>
  ),
  p: ({ children }) => (
    <p style={{ fontWeight: 400, fontSize: '21px', lineHeight: '30px', wordBreak: 'break-all' }}>
      {children}
    </p>
  ),
  wrapper: ({ components, ...rest }) => {
    return (
      <div
        style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}
        {...rest}
      />
    )
  },
}

export const MDX = ({ mdxSource }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])
  return <MDXLayout components={MDXComponents} />
}
