import dynamic from 'next/dynamic';
import 'swagger-ui/dist/swagger-ui.css';
import { useEffect } from 'react';
import type { NextPage } from 'next';
import openapi from 'swims-swagger.json';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const Swagger: NextPage = () => {
  return <SwaggerUI spec={openapi} />;
};

export default Swagger;
