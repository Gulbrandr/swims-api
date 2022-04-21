import React, { FC, useEffect, useState } from 'react';
import openapi from 'swims-swagger.yaml';
import More from 'components/More';
import { BsBraces } from 'react-icons/bs';
import Authentication from 'features/Authentication';

interface DescriptionProps {}

const Description: FC<DescriptionProps> = () => {
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
          type: 'url',
          value: 'GET: /swims/getMemberDetails/{clubId}/?memberId={memberId}',
        },
        {
          value: 'IF: new member, add member data to the roster,',
        },
        {
          value: 'IF: renewing member, update member data in the roster',
        },
      ],
      example: [
        '{',
        '\t"eventSequence": 1234,',
        '\t"eventType": "Member Registration Complete"',
        '\t"ouId": "EFD6F74613444017B0DB1884AADBC117"',
        '\t"eventData": {',
        '\t\t"vendorRecordId": "DB1884AADBC117"',
        '\t\t"memberIds": ["720B84E9E96FAC"]',
        '}',
      ],
    },

    {
      type: 'Member Update',
      summary: 'Generated when a member is updated with in the SWIMS',
      description: 'When ever a member is updated in the system.',
      more: [
        {
          type: 'url',
          value: 'GET: /swims/getMemberDetails/{clubId}/?memberId={memberId}',
        },
        {
          value: 'Update member data in the roster',
        },
      ],
      example: [
        '{',
        '\t"eventSequence": 1234,',
        '\t"eventType": "Member Updated"',
        '\t"ouId": "EFD6F74613444017B0DB1884AADBC117"',
        '\t"eventData": {',
        '\t\t"vendorRecordId": "DB1884AADBC117"',
        '\t\t"memberIds": ["720B84E9E96FAC"]',
        '}',
      ],
    },
    {
      type: 'Club Register the Vendor in SWIMS',
      summary: 'Generated when a Club selects and a approves a vendor in SWIMS',
      description: '',
      more: [
        {
          value: 'Get List of Clubs for a Vendor',
        },
        {
          type: 'url',
          value: 'GET: /swims/getVendorClubs/vendor/{vendorId}',
        },
        {
          value: 'For All New Clubs, add Members to Club Roster',
        },
        {
          type: 'url',
          value: 'GET: /swims/getMemberDetails/{clubId}',
        },
        {
          value: 'Populate Tables with a complete club roster',
        },
      ],
      example: [
        '{',
        '\t"eventSequence": Club Registered,',
        '\t"eventType": "Member Updated"',
        '\t"ouId": "EFD6F74613444017B0DB1884AADBC117"',
        '\t"eventData": {',
        '\t\t"vendorRecordId": "DB1884AADBC117"',
        '}',
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-center pt-8">
      <div className="py-10 px-32 flex flex-col gap-4 prose max-w-none swagger-ui ">
        <div className="info">
          <hgroup className="main">
            <h2 id="general-api" className=" title font-medium text-2xl">
              General API
            </h2>
          </hgroup>
        </div>
        <h1>Onboarding and Authentication</h1>

        <ol>
          <li>Certificate from a known Certificate Authority</li>
          <li>Password Certificate</li>
          <li>URI where we send the EVENTS to. </li>
          <li>Club To Test with.</li>
        </ol>

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
                    <strong>Learn More:</strong>{' '}
                    <a href={step.URL}>{step.URL}</a>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="title">Authentication</h2>
        <Authentication />
        <div className="flex flex-col gap-4">
          <h3>Subscription to Events.</h3>
          <p>
            We will provide the ability for a Vendor to “subscribe” to certain
            events that happen in SWIMS.
          </p>

          <div className="flex flex-col gap-4">
            {Subscriptions.map((step, index) => (
              <More key={index} step={step} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
