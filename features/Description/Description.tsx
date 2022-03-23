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

  const authSteps = [
    {
      description: 'Static IP',
      more: 'The Vendor will submit a Static IP, that all API Request will go through.',
      URL: '',
    },
    {
      description:
        'Purchase an SSL certificate from a trusted Certificate Authority.',
      URL: 'https://cheapsslsecurity.com/blog/what-is-a-certificate-authority-ca/',
    },
    {
      description: 'Install the certificate on their web server(s)',
      URL: 'https://www.digicert.com/kb/ssl-certificate-installation.htm',
    },
    {
      description: 'Create a client certificate and share it with us',
      URL: 'https://www.golinuxcloud.com/openssl-create-client-server-certificate/',
    },
    {
      description: 'Pass certificate info in each request to our APIs',
      URL: 'https://learning.postman.com/docs/sending-requests/certificates/',
    },
  ];

  return (
    <div className="py-10 px-32 flex flex-col gap-4 prose max-w-none">
      <h1 id="general-api" className="title">
        General API
      </h1>

      <h2 className="title">Authentication</h2>

      <table>
        <thead>
          <tr>
            <th>Requirement</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {authSteps.map((step, index) => (
            <tr key={index}>
              <td>
                <strong>STEP {index + 1}:</strong> {step.description}
              </td>
              {step.URL ? (
                <td>
                  <strong>Learn More:</strong> <a href={step.URL}>{step.URL}</a>
                </td>
              ) : (
                <>{step.more && <td>{step.more}</td>}</>
              )}{' '}
            </tr>
          ))}
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
