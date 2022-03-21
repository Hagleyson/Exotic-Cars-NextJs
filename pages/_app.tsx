import type { AppProps } from "next/app";
import { GlobalStyle } from "@globalStyle/GloabalStyle";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
