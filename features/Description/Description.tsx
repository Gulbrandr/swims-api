import React, { FC, useEffect, useState } from 'react';
import openapi from 'swims-swagger.yaml';
import More from 'components/More';

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

  const Subscriptions = [
    {
      type: 'Member Registration and Renewal',
      summary: 'Generated when a Member Registers in SWIMS via OMR',
      description:
        'A Member will need to fully complete OMR from the club provided OMR link. The system will then send a event via the subscription indicating the member has signed.',
      more: [
        {
          key: '1',
          value: 'The vendor could call the GetRoster (with the memberID)',
        },
        {
          key: '2',
          value: 'determine if this is a registration or renewal, ',
        },
        {
          key: '3',
          value:
            'and if it is a registration see if they have this member in their DB.',
        },
        {
          key: '3',
          value:
            'From that, they can either create or update the member information.',
        },
      ],
    },
    {
      type: 'Member Update',
      summary: 'Generated when a member is updated with in the SWIMS',
      description: 'When ever a member is updated in the system.',
      more: [
        {
          key: '1',
          value: 'Call GetRoster (with the memberID)',
        },
        {
          key: '2',
          value: 'compare to old and update system. ',
        },
      ],
    },
    {
      type: 'Club Register the Vendor in SWIMS',
      summary: 'Generated when a Club selects and a approves a vendor in SWIMS',
      description: '',
      more: [
        {
          key: 'New Club',
          value:
            'vendor would call the Get Roster, and populate their tables with a complete club roster',
        },
        {
          key: 'Existing Club',
          value:
            'vendor would call the Get Roster, and populate their tables with a complete club roster',
        },
      ],
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
      <div className="">
        <h3>Subscription to Events.</h3>
        <p>
          We will provide the ability for a Vendor to “subscribe” to certain
          events that happen in SWIMS.
        </p>

        <h4>The data returned will include:</h4>
        <code>
          <ul className="list-disc">
            <li>Event Name</li>
            <li>OID</li>
            <li> Payload</li>
          </ul>
        </code>

        <div className="flex flex-col gap-4">
          {Subscriptions.map((step, index) => (
            <More key={index} step={step} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;
