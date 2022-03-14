import dynamic from 'next/dynamic';
import 'swagger-ui/dist/swagger-ui.css';
import { useEffect } from 'react';
import type { NextPage } from 'next';
import Swagger from 'features/Swagger/';
import Layout from 'features/Layout';
import openapo from 'swims-swagger.json';
import { RedocWrapper } from 'features/Redoc/RedocWrapper';

const RedocPage: NextPage = () => {
  return <RedocWrapper spec={openapo} />;
};

export default RedocPage;
