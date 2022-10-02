import React, { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';


type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div >
    {props.meta}
    <div className="body">
      <Header></Header>
      <div className="text-xl margin-top-64">{props.children}</div>
      <Footer></Footer>
    </div>
  </div>
);

export { Main };
