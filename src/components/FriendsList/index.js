
import './index.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FriendsList = ({meetingId, children}) => {
  const [friends, setfriends] = useState(null);

  // Create token for meeting
  useEffect(() => {
    const cancelSource = axios.CancelToken.source();

    // Get meeting data
    /*api.createMeetingToken(meetingId, cancelSource)
      .then(response => setMeetingData(response.data.data))
      .catch(err => console.error(err));*/

    // Unsubscribe
    return () => cancelSource.cancel('View disposed');
  }, [meetingId]);

  return (
    <div className="friends-list">{children}</div>
  );
};

export default FriendsList;