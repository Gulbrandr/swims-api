import React, { FC } from 'react';


interface PrintMeProps {}

const PrintMe: FC<PrintMeProps> = () => (
  <div data-testid="PrintMe">
    PrintMe Component
  </div>
);

export default PrintMe;
