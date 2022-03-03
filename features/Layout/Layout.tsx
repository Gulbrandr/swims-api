import React, { FC } from 'react';
import TextLink from 'components/TextLink';
import Description from 'features/Description';
import WorkFlows from 'features/WorkFlows';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div
      className="grid grid-cols-main-layout grid-rows-main-layout"
      data-testid="Layout"
    >
      <nav className="fixed col-span-1 w-64 bg-secondary text-white h-screen p-2">
        <div className="flex flex-col justify-center">
          <div
            className="flex flex-col p-6  justify-center items-center"
            data-testid="SwimsLogo"
          >
            <img
              width={100}
              height={100}
              src="/USASwimmingLogo.svg"
              alt="Swims USA Shield Logo"
            />
          </div>
          <TextLink href="#general-api">General API</TextLink>
          <TextLink href="#operations-tag-OmsAthlete">OMS Athlete</TextLink>
        </div>
      </nav>

      <div className="col-start-2 col-span-2 row-start-1  w-full">
        <Description />
      </div>
      <main className="col-start-2 col-span-2 row-start-2 row-span-1 p-8">
        {children}
      </main>
      <div className="col-start-2 col-span-2 row-start-3 row-span-1 p-8">
        <WorkFlows />
      </div>
    </div>
  );
};

export default Layout;
