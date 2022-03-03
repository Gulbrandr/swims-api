import dynamic from 'next/dynamic';
import 'swagger-ui/dist/swagger-ui.css';
import { useEffect } from 'react';
import type { NextPage } from 'next';
import Swagger from 'features/Swagger/';
import Layout from 'features/Layout';

const SwaggerPage: NextPage = () => {
  return (
    <Layout>
      <Swagger />
    </Layout>
  );
};

export default SwaggerPage;
