import type { NextPage } from 'next';
import { useRef } from 'react';

import { RedocWrapper } from 'features/Redoc/RedocWrapper';
import openapi from 'openapi.yaml';
import YAML from 'yaml';
import ReactToPrint from 'react-to-print';

const Home: NextPage = () => {
  const componentRef = useRef(null);
  return (
    <>
      {/* <ReactToPrint
        trigger={() => (
          <button className="bg-primary text-white w-auto p-4 h-auto fixed z-50  top-0 right-0 m-6 rounded">
            Print this out!
          </button>
        )}
        content={() => componentRef.current}
      /> */}
      <RedocWrapper
        ref={componentRef}
        spec={openapi}
        options={{
          theme: {
            sidebar: { backgroundColor: '#041e42', textColor: '#fff' },
            typography: { fontFamily: 'Open Sans' },
          },
        }}
      />
    </>
  );
};

export default Home;
