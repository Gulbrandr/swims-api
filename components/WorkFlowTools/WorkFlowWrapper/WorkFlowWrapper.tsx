import React, { FC } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  ReactFlowProvider,
} from 'react-flow-renderer';

const elementsExample = [
  {
    id: '1',
    type: 'input', // input node
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
    draggable: false,
  },
  // default node
  {
    id: '2',
    // you can also pass a React component as a label
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output', // output node
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },
  // animated edge
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    label: 'Animated Edge',
  },
  { id: 'e2-3', source: '2', target: '3' },
];

interface WorkFlowWrapperProps {
  elements?: any;
  height?: string | number;
}

const WorkFlowWrapper: FC<WorkFlowWrapperProps> = ({
  elements = elementsExample,
  height = '400px',
}) => (
  <div className="rounded border-4 bg-slate-100" style={{ height: height }}>
    <ReactFlowProvider>
      <ReactFlow elements={elements} snapToGrid={true}>
        <Controls />
        <MiniMap
          nodeColor={(node) => {
            switch (node.type) {
              case 'input':
                return 'red';
              case 'default':
                return '#00ff00';
              case 'output':
                return 'rgb(0,0,255)';
              default:
                return '#eee';
            }
          }}
          nodeStrokeWidth={3}
        />
      </ReactFlow>
    </ReactFlowProvider>
  </div>
);

export default WorkFlowWrapper;
