import React, { FC } from 'react';
import { Transition } from '@headlessui/react';
import printJS from 'print-js';

interface TryItProps {}

const TryIt: FC<TryItProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button
        className="bg-primary text-white w-20 h-10 fixed z-50  bottom-0 left-0 m-6 rounded"
        onClick={() => printJS('docs/printjs.pdf')}
      >
        Try It
      </button>

      <Transition
        show={isOpen}
        className="flex flex-col fixed right-0 top-0 w-1/3 gap-4 bg-black z-40 h-screen pl-10 pr-10 pt-20"
        enter="transition ease-in-out duration-400 transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-400 transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <label className="text-white">URL</label>
        <input className="bg-white w-full h-10 "></input>
        {/* <label className="text-white text-lg">Request Body</label>
          <textarea className=" w-full h-2/4 p-4 text-sm"></textarea> */}
        <label className="text-white">Response</label>
        <div className="h-1/4 w-full bg-white"></div>
      </Transition>
    </>
  );
};

export default TryIt;
