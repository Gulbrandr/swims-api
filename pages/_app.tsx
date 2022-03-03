import '../styles/globals.css';
import 'swagger-ui/dist/swagger-ui.css';

import type { AppProps } from 'next/app';
//@ts-ignore
import { ReactQueryDevtools } from 'react-query/lib/devtools/';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from 'features/Layout/Layout';
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
