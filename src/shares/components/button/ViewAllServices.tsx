import React from 'react';
type IViewAllServices = {
  title: String;
};
const ViewAllServices = (props :IViewAllServices) => (
  <div className='button-services'>
  <button type='button' className='text-sm'> {props.title}</button>
</div>
 
);

export { ViewAllServices };
