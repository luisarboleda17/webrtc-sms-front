
import './index.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import api from '../../api';
import Friend from '../Friend';

const FriendsList = ({meetingId}) => {
  const [friends, setfriends] = useState(null);

  // Create token for meeting
  useEffect(() => {
    const cancelSource = axios.CancelToken.source();

    // Get friends
    api.getMeetingFriends(meetingId, cancelSource)
      .then(response => setfriends(response.data.data))
      .catch(err => console.error(err));

    // Unsubscribe
    return () => cancelSource.cancel('View disposed');
  }, [meetingId]);

  if (!friends) {
    return <div className="friends-list">Loading friends...</div>;
  } else if (!Array.isArray(friends)) {
    return <div className="friends-list">{friends}</div>; // Show error
  } else {
    return (
      <div className="friends-list">{
        friends.map((friend) => <Friend key={friend.phone} name={friend.name} phone={friend.phone} state={friend.accepted}/>)
      }</div>
    );
  }
};

export default FriendsList;