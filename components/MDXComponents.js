import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import NextImage from 'next/image'
import NextLink from 'next/link'

import styles from '@/css/components/MDXComponents.module.css'

export const H1 = ({ children }) => (
  <div>
    <h1 className={styles.h1}>{children}</h1>
  </div>
)

export const H2 = ({ children }) => (
  <div>
    <h2 className={styles.h2}>{children}</h2>
  </div>
)
export const H3 = ({ children }) => (
  <div>
    <h3 className={styles.h3}>{children}</h3>
  </div>
)
export const H4 = ({ children }) => (
  <div>
    <h4 className={styles.h4}>{children}</h4>
  </div>
)
export const Li = ({ children }) => <li className={styles.li}>{children}</li>

export const P =  ({ children }) => <p className={styles.p}>{children}</p>
export const Wrapper  =({ components, ...rest }) => {
  return <div className={styles.wrapper} {...rest} />
}
export const Hr = ({ children }) => <hr className={styles.hr} />
export const Image = ({ ...rest }) => <NextImage {...rest} />

export const Link = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <a {...rest} />
      </NextLink>
    )
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return (
    <a
      className={styles.external_link}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    />
  )
}


export const MDXComponents = {
  img: Image,
  a: Link,
  h1: H1,
  h2: H2,
  h3: H3,
  li: Li,
  p: P,
  wrapper: Wrapper,
  hr: Hr,
}

export const MDX = ({ mdxSource }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])
  return <MDXLayout components={MDXComponents} />
}
