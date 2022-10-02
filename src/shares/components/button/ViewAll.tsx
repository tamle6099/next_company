import React from 'react';

type IViewAll = {
  title: String;
};
const ViewAll = (props: IViewAll) => (
 
 
     <div className='button-group'>
  <button type='button' className='text-sm'> {props.title}</button>
</div>
 
);

export { ViewAll };
