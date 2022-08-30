import '@/css/global.css'
// import '@/css/reset.css'

// import '@/css/prism.css'
// import '@/css/tailwind.css'
// import '@fontsource/inter/variable-full.css'
import 'katex/dist/katex.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      {Component.name !== 'VisTest' ? (
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      ) : (
        <Component {...pageProps} />
      )}
    </ThemeProvider>
  )
}
