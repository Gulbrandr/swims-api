import type { NextPage } from 'next';

import { RedocWrapper } from 'features/Redoc/RedocWrapper';
import swagger from 'swagger.json';
import openapi from 'openapi.yaml';
import YAML from 'yaml';

const Home: NextPage = () => {
  return (
    <RedocWrapper
      spec={openapi}
      options={{
        theme: {
          sidebar: { backgroundColor: '#041e42', textColor: '#fff' },
          typography: { fontFamily: 'Open Sans' },
        },
      }}
    />
  );
};

export default Home;
