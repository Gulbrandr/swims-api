import dynamic from 'next/dynamic';
import { FC } from 'react';
import 'swagger-ui/dist/swagger-ui.css';
import { useEffect } from 'react';
import type { NextPage } from 'next';
import openapi from 'swims-swagger.json';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

interface SwaggerUIProps {
  source?: any;
}
const Swagger: FC<SwaggerUIProps> = ({ source = openapi }) => {
  return <SwaggerUI spec={source} />;
};

export default Swagger;
