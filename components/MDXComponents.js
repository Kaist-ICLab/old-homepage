import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import CustomLink from './Link'

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

export const MDXComponents = {
  Image,
  a: CustomLink,
  h1: H1,
  h2: H2,
  h3: H3,
  li: ({ children }) => <li className={styles.li}>{children}</li>,
  p: ({ children }) => <p className={styles.p}>{children}</p>,
  wrapper: ({ components, ...rest }) => {
    return <div className={styles.wrapper} {...rest} />
  },
}

export const MDX = ({ mdxSource }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])
  return <MDXLayout components={MDXComponents} />
}
