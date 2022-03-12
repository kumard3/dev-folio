import "../styles/globals.css";
import type { AppProps } from "next/app";
import Analytics from "../components/analytics";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
