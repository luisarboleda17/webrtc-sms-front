
import './index.scss';
import React from 'react';

/**
 * Map friend state
 * @param accepted
 * @returns {string}
 */
const getFriendState = accepted => {
  if (accepted === undefined || accepted === null) {
    return 'No answer';
  } else if (accepted) {
    return 'Accepted';
  } else {
    return 'Rejected';
  }
};

const Friend = ({name, phone, state}) => (
  <div className="friend row">
    <div className="col-7">
      <div className="row">
        <div className="friend__name col-12">{name}</div>
        <div className="friend__phone col-12">{phone}</div>
      </div>
    </div>
    <div className="friend__state col-5">{getFriendState(state)}</div>
  </div>
);

export default Friend;