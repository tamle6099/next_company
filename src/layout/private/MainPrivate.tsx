import React, { ReactNode } from 'react';
import { FooterPrivate } from './FooterPrivate';

import { HeaderPrivate } from './HeaderPrivate';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const MainPrivate = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-3 md:px-0">
    {props.meta}
    <div className="body">
      <HeaderPrivate></HeaderPrivate>
      <div className="text-xl margin-top-64">{props.children}</div>
      <FooterPrivate></FooterPrivate>
    </div>
  </div>
);

export { MainPrivate };
