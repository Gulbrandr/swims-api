import '../styles/globals.css';

import type { AppProps } from 'next/app';
//@ts-ignore
import { ReactQueryDevtools } from 'react-query/lib/devtools/';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from 'features/Layout/Layout';
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
