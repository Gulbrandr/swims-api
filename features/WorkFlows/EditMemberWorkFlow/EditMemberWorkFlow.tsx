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
          Family Logs in to USA Swimming Account that was created during OMR and
          is linked to Children.
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
          Member/Parent can make edits to their member record. They can also
          view times reports, Goals, and other functionality. This will be the
          new and improved, rebranded version of Deck Pass.
        </div>
      ),
    },
    draggable: false,
    position: { x: 0, y: 450 },
    className: 'w-20 text-lg',
  },
  {
    id: '3rdPartyEnd',
    type: 'output',
    data: {
      label: (
        <div>
          <div className="flex justify-center">
            <FcBusinessContact className="w-16 h-16" />
          </div>
          If a relevant field is edited, this information will pass to the 3rd
          party vendor when they call the GetRosterByClubId API. In this API,
          USA Swimming will also pass Member In Good Standing information
        </div>
      ),
    },
    draggable: false,
    position: { x: 500, y: 450 },
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
    id: '3rd Party End',
    source: 'database',
    target: '3rdPartyEnd',
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
    source: '3rdPartyBilling',
    target: 'token',
    animated: true,
    style: { stroke: '#ff0000', strokeWidth: '5px' },
  },
];

const RegistrationWorkflow: FC<RegistrationWorkflowProps> = () => (
  <>
    <h2>
      <b>Member Edit</b>
    </h2>
    <h3>Parent/Member Flow</h3>
    <WorkFlowWrapper elements={RegistrationProcess} height="500px" />
  </>
);

export default RegistrationWorkflow;
