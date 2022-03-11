import "../styles/globals.css";
import type { AppProps } from "next/app";
import SaveDataProvider from "../context/saveData";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SaveDataProvider>
      <Component {...pageProps} />
    </SaveDataProvider>
  );
}

export default MyApp;
