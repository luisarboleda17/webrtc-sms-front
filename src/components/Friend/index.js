
import './index.scss';
import React from 'react';

const Friend = ({name, phone, state}) => (
  <div className="friend row">
    <div className="col-7">
      <div className="row">
        <div className="friend__name col-12">{name}</div>
        <div className="friend__phone col-12">{phone}</div>
      </div>
    </div>
    <div className="friend__state col-5">{state}</div>
  </div>
);

export default Friend;