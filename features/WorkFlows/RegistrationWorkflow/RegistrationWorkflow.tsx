import React, { FC } from 'react';
import WorkFlowWrapper from 'components/WorkFlowTools/WorkFlowWrapper';
import { FcBusinessman, FcBusinesswoman } from 'react-icons/fc';
import { FaSwimmer } from 'react-icons/fa';
import { MdOutlinePayments } from 'react-icons/md';
import SwimsLogo from 'features/SwimsLogo';

interface RegistrationWorkflowProps {}

const RegistrationProcess = [
  {
    id: 'start',
    type: 'input', // input node
    data: {
      label: (
        <div className="flex flex-col">
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
    position: { x: 0, y: 0 },
    className: 'w-20 text-lg',
  },
  // default node
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
          Any other 3rd party vendor The 3rd parties will be responsible for
          connecting to the API and setting up monthly billing for clubs that
          have that feature.
        </div>
      ),
    },
    position: { x: 500, y: 1100 },
    className: 'w-20 text-lg',
    targetPosition: 'top',
    sourcePosition: 'bottom',
  },
  {
    id: 'payment',
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
    position: { x: 500, y: 1100 },
    className: 'w-20 text-lg',
    targetPosition: 'top',
    sourcePosition: 'bottom',
  },
  {
    id: 'Token',
    data: {
      label: (
        <div>
          <FaSwimmer className="w-28 h-28" />
          When the member completes the USA Swimming registration, they will
          receive a transaction token that they can use to move on to the
          team-specific form. The code will call the API that passes member
          information to the club's 3rd party vendor. This will include the
          Member ID which will greatly simplify Online Meet Entry and APT
          verification for all coaches, officials, and athletes
        </div>
      ),
    },
    position: { x: 0, y: 1000 },
    className: 'w-20 text-lg',
    sourcePosition: 'top',
  },

  // animated edge
  {
    id: 'i1-2',
    source: 'start',
    target: 'database',
    animated: true,
    style: { stroke: '#ff0000', strokeWidth: '5px' },
  },
  {
    id: '2-3',
    source: 'database',
    target: 'output',
    animated: true,
    style: { stroke: '#ff0000', strokeWidth: '5px' },
  },

  {
    id: '3-4o',
    source: 'output',
    target: 'payment',
    style: { stroke: '#ff0000', strokeWidth: '5px' },
  },
  {
    id: 'payment-output',
    source: 'payment',
    target: 'output',
    style: { stroke: '#ff0000', strokeWidth: '5px' },
  },
];

const RegistrationWorkflow: FC<RegistrationWorkflowProps> = () => (
  <>
    <h2 className="title">Registration Process - Parent/Member Flow</h2>
    <WorkFlowWrapper elements={RegistrationProcess} height="1000px" />
  </>
);

export default RegistrationWorkflow;
