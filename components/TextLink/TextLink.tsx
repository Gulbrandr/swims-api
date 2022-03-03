import React, { FC } from 'react';

interface TextLinkProps {
  href: string;
}

const TextLink: FC<TextLinkProps> = ({ href, children, ...props }) => (
  <a
    href={href}
    {...props}
    data-testid="TextLink"
    className=" flex flex-row items-center h-14 w-full p-2 text-white hover:rounded hover:bg-slate-500 hover:underline "
  >
    {children}
  </a>
);

export default TextLink;
