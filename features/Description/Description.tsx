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
        '\t"clubId": "EFD6F74613444017B0DB1884AADBC117"',
        '\t"eventData": {',
        '\t\t"vendorId": "DB1884AADBC117"',
        '\t\t"memberIds": ["720B84E9E96FAC"]',
        '}',
      ],
    },

    {
      type: 'Updated, Upgraded',
      summary: 'Generated when a member is updated within the SWIMS',
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
        '\t"clubId": "EFD6F74613444017B0DB1884AADBC117"',
        '\t"eventData": {',
        '\t\t"vendorId": "DB1884AADBC117"',
        '\t\t"memberIds": ["720B84E9E96FAC"]',
        '}',
      ],
    },
  ];

  const clubEvents = [
    {
      type: 'Club Activates/Deactivates the Vendor in SWIMS',
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
        '\t"eventSequence": "002",',
        '\t"eventType": "Member Updated"',
        '\t"clubId": "EFD6F74613444017B0DB1884AADBC117"',
        '\t"eventData": {',
        '\t\t"vendorId": "DB1884AADBC117"',
        '}',
      ],
    },
  ];

  const fields = [
    {
      term: 'memberId',
      definition:
        'New randomly-generated 14 alphanumeric ID that will be a member’s unique identifier',
    },
    {
      term: 'oldUsasId ',
      definition:
        'Old USA Swimming 14 character ID using first name, middle initial, last name, and birthdate',
    },
    {
      term: 'competitionCategory',
      definition: 'New terminology used for Gender',
    },
    {
      term: 'contactInformation',
      definition:
        'A Member’s primary contact (Guardian/Emergency Contact depending on age) listed in SWIMS',
    },
    {
      term: 'registrationDate',
      definition: 'The date of a member registration',
    },
    {
      term: 'expirationDate',
      definition: 'the date that a member’s registration expires',
    },
    { term: 'offeringId', definition: 'The id of the registration type' },
    {
      term: 'RegistrationType',
      definition: 'Descriptor for the registration type',
    },
    { term: 'TransactionType', definition: 'Registration, Upgrade, or Cancel' },
    {
      term: 'usasFee',
      definition:
        'USA Swimming’s membership fee. For Upgrades, this field will show the delta between original usasFee and the upgraded membership usasFee.',
    },
    {
      term: 'lscFee',
      definition:
        'The member’s Local Swimming Committee membership fee. For Upgrades, this field will show the delta between original lscFee and the upgraded membership lscFee.',
    },
    {
      term: 'IsRenewal',
      definition: 'Is the registration for an existing member or a new member',
    },
    {
      term: 'memberGoodStandingExpirationDate',
      definition: 'The date that a member is no longer “In Good Standing”. ',
    },
    {
      term: 'In Good Standing',
      definition:
        'used to describe all member requirements by registration type are met. \nFor example, an 18+ year old athlete must complete Athlete Protection Training to be a “Member in Good Standing”',
    },
    {
      term: 'clubId',
      definition: 'Alphanumeric ID that is a club’s unique identifier',
    },
    {
      term: 'vendorId',
      definition: 'Alphanumeric ID that is a vendor’s unique identifier',
    },

    {
      term: 'Upgrade',
      definition:
        'When a member upgrades their membership, their initial membership will expire (expirationDate is set to yesterday). There will be a new registration record with a registrationDate of today and an expirationDate of the end of the season.',
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
        The following will need to be sent to Swims to onboard a vendor. The
        Vendor form below is not needed to test the SWIMS Vendor API but will
        need to be completed before a vendor is given production access.
        <ol>
          <li>Vendor Form: ( wip )</li>
          <li>Vendors Using Events will need</li>
          <ul>
            <li>URI where we send the EVENTS </li>
            <li>
              The Vendor will create a Certificate and Provide To Swims the
              following. This will be sent with each event to ensure the
              security of our event endpoint.
            </li>
            <ul>
              <li>RootCertificate.cer</li>
              <li>ClientCertificate.pfx</li>
              <li>Client Certificate Password</li>
            </ul>
          </ul>
          <li>
            Club ID to Test With: this should be a club you already have access
            via legacy API. New Vendors will be given a random test club.
          </li>
        </ol>
        <h2 className="title">Authentication</h2>
        <Authentication />
        <div className="flex flex-col gap-2">
          <h3>Subscription to Events.</h3>
          <p>
            We will provide the ability for a Vendor to “subscribe” to certain
            events that happen in SWIMS.
          </p>
          <h4>Member Events</h4>

          <dl className="pl-4">
            <dt>Member Registers</dt>
            <dt>Member Renewal</dt>
            <dt>Member Updated</dt>
            <dt>Member Upgrade</dt>
            <dt>Member Transfer From Club</dt>
            <dt>Member Transfer To Club</dt>
            <dt>Member Cancels</dt>
          </dl>

          <div className="flex flex-col gap-4">
            {Subscriptions.map((step, index) => (
              <More key={index} step={step} />
            ))}
          </div>

          <h5 className="font-semibold">Member Transfers</h5>
          <p>A special set of events happens when a member transfers clubs.</p>
          <ol>
            <li>
              In Swims the Transfer is initiated from the Member Details Page by
              clicking the:{' '}
              <span className="text-sky-500 underline cursor-pointer">
                initiate transfer
              </span>{' '}
              button link.
            </li>
            <li>
              The New Club is entered as well as other transfer data needed.
            </li>
            <li>
              This creates 2 new events.
              <ul>
                <li>
                  <strong>Member Transfer From Club Event</strong> Received by
                  the Club that the member is transferring out of.
                </li>
                <li>
                  <strong>Member Transfer To Club Event</strong> Received by the
                  Club that the member is transferring into.
                </li>
                <span className="alert alert-warning shadow-lg md:w-3/4">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <strong>Note:</strong> the Vendor Software will only receive
                    both events if both clubs are activated for the Vendor.
                  </div>
                </span>
              </ul>
            </li>
            <li>
              Similar to the Member Registration Event, the Vendor Software will
              need to do the following.
            </li>
            <li>
              The Vendor will need to reconcile the member data in their system.
            </li>
            <ul>
              <span>
                <strong>IF:</strong> the member is not found in the Vendor’s
                system, the Vendor will call.
              </span>
              <ul>
                <li>
                  <pre className="w-1/2">
                    {`GET: /swims/getMemberDetails/{clubId}/?memberId={memberId}`}
                  </pre>
                </li>
                <li>
                  <strong>THEN:</strong> create the member in their system.
                </li>
              </ul>
            </ul>
            <ul>
              <span>
                <strong>IF:</strong> the is already in the Vendor’s system, the
                Vendor will call.
              </span>
              <ul>
                <li>
                  <pre className="w-1/2">
                    {`GET: /swims/getMemberDetails/{clubId}/?memberId={memberId}`}
                  </pre>
                </li>
                <li>
                  <strong>THEN:</strong> update the member in their system, and
                  preform any club transfer procedures in the Vendors System.
                </li>
              </ul>
            </ul>
          </ol>

          <hr></hr>
          <h4>Club Events</h4>

          <dl className="pl-4">
            <dt>Club Activates Vendor</dt>
            <dt>Club Deactivates Vendor</dt>
          </dl>
          <div className="flex flex-col gap-4">
            {clubEvents.map((step, index) => (
              <More key={index} step={step} />
            ))}
          </div>

          <hr></hr>
          <h3>Swims Terms</h3>

          {fields.map((field, index) => (
            <dl key={index}>
              <dt className="font-semibold">{field.term}:</dt>
              <dd className="pl-4 capitalize">{field.definition}</dd>
            </dl>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;
