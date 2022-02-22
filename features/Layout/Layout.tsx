import React, { FC } from 'react';
import TryIt from 'features/TryIt';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div
      className="grid grid-cols-main-layout grid-rows-main-layout"
      data-testid="Layout"
    >
      <main className="col-start-1 col-span-2 row-start-1">{children}</main>
      <TryIt />
    </div>
  );
};

export default Layout;
