import React from 'react'
type IIntroduce= {
  title:string;
}
function Introduce(props: IIntroduce) {
  return (
          <div className="">          
              <p className=" text-white text-center">
              {props.title}
              </p>
          </div>
  )
}

export default Introduce