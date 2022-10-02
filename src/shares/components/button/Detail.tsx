import React from 'react';

type IDetail = {
  title: String;
};
const Detail = (props: IDetail) => (
  <div>{props.title}</div>
);

export { Detail };
