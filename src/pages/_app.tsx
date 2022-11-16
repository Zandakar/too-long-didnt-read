import React from 'react';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactGA from 'react-ga';

import { AppProps } from 'next/app';

import '../styles/main.css';
import '../styles/prism-a11y-dark.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])
  
  return <Component {...pageProps} />
};


export default MyApp;
