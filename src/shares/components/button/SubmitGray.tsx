import React from 'react';

type ISubmitGray = {
  title: String;
  width?:number;
};
const SubmitGray = (props: ISubmitGray) => (
 <div className='btn_gray'>
   <button style={{ width: `${props.width}px` }}>{props.title}</button>
 </div>
);

export { SubmitGray };
