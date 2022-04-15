import React, { FC } from 'react';

interface TextLinkProps {
  href?: string;
  children?: React.ReactNode;
  props?: any;
  active?: string;
  onClick: (href: any) => void;
}

const TextLink: FC<TextLinkProps> = ({
  href,
  children,
  active,
  onClick,
  ...props
}) => (
  <a
    href={href}
    {...props}
    data-testid="TextLink"
    className={` ${
      active === href
        ? 'bg-slate-400  text-secondary'
        : ' hover:bg-slate-400 hover:text-secondary'
    } flex flex-row items-center h-14 w-full p-4 gap-4 text-white  text-sm mx-4 rounded my-2`}
    onClick={() => onClick(href)}
  >
    {children}
  </a>
);

export default TextLink;
