import React from 'react';

type ISubmit = {
  title: String;
  width?:number;
};
const Submit = (props: ISubmit) => (
 <div className='bnt_max'>
   <button style={{ width: `${props.width}px` }}>{props.title}</button>
 </div>
);

export { Submit };
