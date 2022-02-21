import React, { FC } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
  Typography,
  useTheme,
} from '@material-ui/core';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className="grid grid-cols-main-layout grid-rows-main-layout"
      data-testid="Layout"
    >
      <main className="col-start-1 col-span-2 row-start-1">{children}</main>

      <button
        className="bg-primary text-white w-20 h-10 fixed z-50  top-0 right-0 m-6 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        Try It
      </button>
      {isOpen && (
        <div className="flex flex-col fixed right-0 top-0 w-1/3 gap-4 bg-black z-40 h-screen pl-10 pr-10 pt-20">
          <label className="text-white">URL</label>
          <input className="bg-white w-full h-10 "></input>
          {/* <label className="text-white text-lg">Request Body</label>
          <textarea className=" w-full h-2/4 p-4 text-sm"></textarea> */}
          <label className="text-white">Response</label>
          <div className="h-1/4 w-full bg-white"></div>
        </div>
      )}
    </div>
  );
};

export default Layout;
