import React, { FC } from 'react';
import WorkFlowWrapper from 'components/WorkFlowTools/WorkFlowWrapper';
import {
  FcBusinessman,
  FcBusinesswoman,
  FcBusinessContact,
} from 'react-icons/fc';
import { FaSwimmer } from 'react-icons/fa';
import { MdOutlinePayments } from 'react-icons/md';
import SwimsLogo from 'features/SwimsLogo';

interface RegistrationWorkflowProps {}

const RegistrationProcess = [
  {
    id: 'start',
    type: 'default',
    data: {
      label: (
        <div className="flex flex-col border border-blue-700">
          <div className="flex flex-row justify-center">
            <FcBusinessman className="w-28 h-28" />
            <FcBusinesswoman className="w-28 h-28" />
          </div>
          Family tries to join a club team. The Club will have a custom
          registration link that they can send to the prospective family or the
          family can access it from their 3rd party vendor website. Family
          creates Ping Identity account and experiences the new USA Swimming new
          software. The member does not pay USA Swimming directly.
        </div>
      ),
    },
    draggable: false,
    position: { x: 0, y: 0 },
    className: 'w-20 text-lg',
  },

  {
    id: 'database',
    // you can also pass a React component as a label
    data: {
      label: (
        <div>
          <div className="flex justify-center">
            <SwimsLogo />
          </div>
          Member record is created in the database. This person is officially a
          USA Swimming member when they finish the registration. Clubs will be
          able to see registrations in their Club Portal. LSCs will be able to
          see their registrations within Member Administration Portal. Within
          the Member Administration Portal, an LSC can manually manage club and
          member payments. For example, when a club pays, the LSC registrar can
          update the Payment flag one by one or in bulk for entire clubs.
        </div>
      ),
    },
    draggable: false,
    position: { x: 0, y: 450 },
    className: 'w-20 text-lg',
  },
  ,
  {
    id: '3rdPartyBilling',
    type: 'default',
    data: {
      label: (
        <div>
          <div className="flex justify-center">
            <MdOutlinePayments className="w-16 h-16" />
          </div>
          A Club will pay LSCs like they normally do. USA Swimming will draw
          funds from the prior month of registrations on the 10th of each month.
        </div>
      ),
    },
    draggable: false,
    position: { x: 500, y: 1100 },
    className: 'w-20 text-lg',
    targetPosition: 'top',
    sourcePosition: 'bottom',
  },
  {
    id: '3rdPartyStart',
    type: 'input',
    data: {
      label: (
        <div>
          <div className="flex justify-center">
            <FcBusinessContact className="w-16 h-16" />
          </div>
          The 3rd parties will be responsible for directing a USA Swimming
          registrant to the USA Swimming OMR workflow if the club uses a 3rd
          party vendor
        </div>
      ),
    },
    draggable: false,
    position: { x: 500, y: 100 },
    className: 'w-20 text-lg',
    targetPosition: 'top',
    sourcePosition: 'bottom',
  },
  {
    id: 'token',
    data: {
      label: (
        <div className="flex flex-col border border-red-700">
          <div className="flex justify-center ">
            <FaSwimmer className="w-28 h-28" />
          </div>
          When the member completes the USA Swimming registration, they will
          receive a transaction token that they can use to move on to the
          team-specific form. The code will call the API that passes member
          information to the club's 3rd party vendor. This will include the
          Member ID which will greatly simplify Online Meet Entry and APT
          verification for all coaches, officials, and athletes
        </div>
      ),
    },
    draggable: false,
    position: { x: 0, y: 1000 },
    className: 'w-20 text-lg',
    sourcePosition: 'top',
  },

  // animated edge
  {
    id: 'i1-2',
    source: 'start',
    target: 'database',
    style: { stroke: '#ff0000', strokeWidth: '5px' },
  },
  {
    id: '3rd Party Start',
    source: '3rdPartyStart',
    target: 'start',
    animated: true,
    style: { stroke: '#ff0000', strokeWidth: '5px' },
  },
  {
    id: 'Output',
    source: 'database',
    target: 'token',
    style: { stroke: '#ff0000', strokeWidth: '5px' },
  },

  {
    id: 'payment-output',
    source: 'token',
    target: '3rdPartyBilling',
    animated: true,
    style: { stroke: '#ff0000', strokeWidth: '5px' },
  },
];

const RegistrationWorkflow: FC<RegistrationWorkflowProps> = () => (
  <>
    <h2>
      <b>Registration Process</b>{' '}
    </h2>
    <h3> Parent/Member Flow</h3>
    <div className="flex flex-row">
      <WorkFlowWrapper elements={RegistrationProcess} height="1000px" />
    </div>
  </>
);

export default RegistrationWorkflow;
