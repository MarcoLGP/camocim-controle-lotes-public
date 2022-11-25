import Head from 'next/head';
import '../styles/global.css'
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from "react-redux";
import type { AppProps } from 'next/app';
import Bar from '../components/header/Bar';
import store from "../redux/store"
import type { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <NextUIProvider>
        <Provider store={store}>
          <div className='window' key={0} >
            <Bar>
              {getLayout(<Component {...pageProps} />)}
            </Bar>
          </div>
        </Provider>
      </NextUIProvider>
    </>
  );
}

export default MyApp;