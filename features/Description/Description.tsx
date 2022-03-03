import React, { FC, useEffect } from 'react';
import { Markup } from 'interweave';
import openapi from 'swims-swagger.yaml';
import YAML from 'yaml';
import { useRemark } from 'react-remark';

interface DescriptionProps {}

const Description: FC<DescriptionProps> = () => {
  const description = openapi.info['x-description'];

  const Response = [
    { code: '200 Success', description: 'OK' },
    {
      code: '400 Bad Request',
      description:
        'API version is missing or incorrect. {"message": "Invalid Version”}',
    },
    {
      code: '400 Bad Request',
      description: 'Invalid version number',
    },
    {
      code: '400 Bad Request',
      description:
        'The api-user-name header is missing {"message": "api-user-name header  value is required"}',
    },
    {
      code: '401 Bad Request',
      description: 'The vendor-key, vendor-secret, or auth-key is invalid. ',
    },
    {
      code: '401 Bad Request',
      description: 'The club has revoked access for the vendor.  ',
    },
    {
      code: '500 Internal Server Error',
      description:
        'An error occurred within the API while processing the request.  ',
    },
  ];

  const [markdown, setMarkown] = useRemark();
  useEffect(() => {
    setMarkown(description);
  }, []);

  return (
    <div className="py-10 px-32 flex flex-col gap-4 prose max-w-none">
      <h1 className="title">General API</h1>

      <h2 className="title">Authentication</h2>

      <table>
        <thead>
          <tr>
            <th>Requirement</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Static IP</td>
            <td>
              The Vendor will submit a Static IP, that all API Request will go
              through.
            </td>
          </tr>
          <tr>
            <td>Submit: TLS/SSL Cert</td>
            <td>
              The Vendor will SUBMIT a TLS/SSL Cert that will be submitted with
              each request.
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="title">Request</h2>
      <p>
        Each API request must contain headers that identify the API version,
        vendor and club credentials, and the API username. All requests must be
        submitted from one of your servers to the USA Swimming server. This is
        to ensure that security keys are never shared with a client application
        such as a web browser. All requests must be submitted with HTTPS (SSL)
        encryption. HTTP is not supported. TLS 1.2 is required.
      </p>

      <h2 className="title">Responses</h2>
      <p>
        All responses will be in JSON format. All responses will be in the
        following format:
      </p>
      <table>
        <thead>
          <tr>
            <th>Status Code</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Response.map((item) => (
            <tr key={item.code + item.description}>
              <td>{item.code}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Description;
