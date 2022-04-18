import React, { FC, useState } from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

const More = ({key, step }: any) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  return (
    <div key={key} 
      className={` card flex flex-col gap-4 collapse collapse-arrow shadow-lg border ${
        isOpen && 'collapse-open'
      } `}
    >
      <div
        className="flex flex-row gap-2 items-center cursor-pointer collapse-title "
        onClick={() => setIsOpen(!isOpen)}
      >
        <strong>{step.type}</strong>
        <span> {step.summary}</span>{' '}
      </div>

      <div className="collapse-content">
        {step.more &&
          step.more.map((m, index) => (
            <ol key={index} className="">
              <li className="list-none capitalize flex flex-row gap-4 items-center">
                <strong>{index + 1}:</strong>
                {m.type ? (
                  <pre className="not-prose"> {m.value}</pre>
                ) : (
                  <span> {m.value}</span>
                )}
              </li>
            </ol>
          ))}
        {step.example && (
          <>
            <h4>Example:</h4>
            <pre>
              <code className="language-javascript flex flex-col not-prose text-sm shadow">
                {step.example?.map((s,index) => (
                  <pre key={index}
                className="py-0.5">{s}</pre>
                ))}
              </code>
            </pre>
          </>
        )}
      </div>
    </div>
  );
};

export default More;
