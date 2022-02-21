import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import Image from 'next/image';
import { VFile } from 'vfile';

const MermaidWrapper = ({ chart, config }: any) => {
  // Mermaid initilize its config
  const [chartRender, setChartRender] = React.useState(false);

  useEffect(() => {
    mermaid.mermaidAPI.initialize({ startOnLoad: false });

    // Example of using the API var

    const graphDefinition = 'graph TB\na-->b';
    const graph = mermaid.mermaidAPI.render('graphDiv', graphDefinition);
    setChartRender(graph);
  }, []);

  return chartRender;
};

export default MermaidWrapper;
