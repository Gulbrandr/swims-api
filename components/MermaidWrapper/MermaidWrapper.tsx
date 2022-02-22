import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import SVG, { Props as SVGProps } from 'react-inlinesvg';

const MermaidWrapper = ({ chart, config }: any) => {
  // Mermaid initilize its config
  const [chartRender, setChartRender] = React.useState('loading');

  useEffect(() => {
    mermaid.mermaidAPI.initialize({ startOnLoad: true });

    const graphDefinition = 'graph TB\na-->b';
    const graph = mermaid.mermaidAPI.render('graphDiv', graphDefinition);
    setChartRender(graph);
  }, []);

  return (
    <>
      <h1>Workflows</h1>
      <div className="graphDiv"></div>
    </>
  );
};

export default MermaidWrapper;
