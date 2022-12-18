import React from 'react';
import Script from 'next/script';
import { AppProps } from 'next/app';

import '../styles/main.css';
import '../styles/prism-a11y-dark.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5LX7ZPWY7X"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5LX7ZPWY7X');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
};


export default MyApp;



