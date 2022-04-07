import React, { FC, useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

const More = ({ step }: any) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  return (
    <div
      className={` card flex flex-col gap-4 collapse collapse-arrow shadow-lg border ${
        isOpen && 'collapse-open'
      } `}
    >
      <div
        className="flex flex-row gap-2 items-center cursor-pointer collapse-title"
        onClick={() => setIsOpen(!isOpen)}
      >
        <strong>{step.type}</strong>
        <span> {step.summary}</span>{' '}
      </div>

      <div className="collapse-content">
        <div>{step.description}</div>
        {step.more &&
          step.more.map((m, index) => (
            <ul key={index} className="">
              <li className="list-disc capitalize">
                <strong>{m.key}:</strong>
                <span> {m.value}</span>
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default More;
