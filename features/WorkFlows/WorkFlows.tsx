import React, { FC } from 'react';
import RegistrationWorkflow from './RegistrationWorkflow';

interface WorkFlowsProps {}

const WorkFlows: FC<WorkFlowsProps> = () => (
  <div className="swagger-ui">
    <div data-testid="WorkFlows" className="info">
      <h1 className="title">Work Flows</h1>
      <RegistrationWorkflow />
    </div>
  </div>
);

export default WorkFlows;
