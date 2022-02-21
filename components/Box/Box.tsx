import React, { FC } from 'react';


interface BoxProps {}

const Box: FC<BoxProps> = () => (
  <div data-testid="Box">
    Box Component
  </div>
);

export default Box;
