import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Analytics from '../components/analytics'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Analytics />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
