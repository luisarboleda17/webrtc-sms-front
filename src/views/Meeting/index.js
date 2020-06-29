
import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';
import axios from 'axios';

import api from '../../api';

const MeetingView = (props) => {
  const [meetingData, setMeetingData] = useState(null);
  const meetingId = props.match.params.meetingId;

  // Create token for meeting
  useEffect(() => {
    const cancelSource = axios.CancelToken.source();

    // Get meeting data
    api.createMeetingToken(meetingId, cancelSource)
      .then(response => setMeetingData(response.data.data))
      .catch(err => console.error(err));

    // Unsubscribe
    return () => cancelSource.cancel('View disposed');
  }, [meetingId]);

  if (!meetingData) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <header>
          <h1>Friends Meet App</h1>
        </header>
        <OTSession apiKey={meetingData.apiKey}
                   sessionId={meetingData.sessionId}
                   token={meetingData.token}>
          <OTPublisher />
          <OTStreams>
            <OTSubscriber />
          </OTStreams>
        </OTSession>
      </div>
    );
  }
};

export default MeetingView;