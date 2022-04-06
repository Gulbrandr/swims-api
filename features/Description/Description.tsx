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

  const Endpoints = [
    {
      endpoint: 'GetClubsForVendor',
      summary: 'Get all clubs for a vendor',
      description: 'Get all clubs for a vendor',
    },
    {
      endpoint: 'GetMemberDetailByClubId ',
      summary: 'Get all clubs for a vendor',
      description: 'Get all clubs for a vendor',
      more: [
        '1)	MemberId',
        '2)	Date/Time Last Modified (this will the let Vendor grab updates that have been made from a certain timeframe.  The use-case would be they were down for 30 minutes and didn’t receive any of our POSTS.  They can refresh all of the updates that happened between the date/time they enter and now).',
      ],
    },
    {
      endpoint: 'GetRegistrationLinkByClubId ',
      summary: 'Get Registration Link for a club',
      description: 'Get Registration Link for a club',
    },
    {
      endpoint: 'GetRegistrationLinkByClubId ',
      summary: 'Get Registration Link for a club',
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
              {step.URL && (
                <td>
                  <strong>Learn More:</strong> <a href={step.URL}>{step.URL}</a>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Endpoint</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {Endpoints.map((step, index) => (
            <tr key={index}>
              <td>{step.endpoint}</td>
              <td>{step.summary}</td>
              {/* <td>{step.description}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Description;
