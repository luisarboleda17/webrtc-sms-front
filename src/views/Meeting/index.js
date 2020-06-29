
import './index.scss';
import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';
import axios from 'axios';

import api from '../../api';
import Header from '../../components/Header';
import FriendsList from '../../components/FriendsList';
import Friend from '../../components/Friend';

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

  return (
    <div className="meeting">

      <Helmet>
        <title>Meeting {meetingId} | Friends Meet</title>
      </Helmet>

      <Header url={`http://fm.larboleda.io/${meetingId}`}/>
      {!meetingData ?
        <div className="meeting__loading">Loading meeting...</div> :
        <div className="meeting__container">
          <div className="meeting__info">
            <h2>Friends list</h2>
            <FriendsList meetingId={meetingId}>
              <Friend name="Luis Arboleda" phone="+507 64597978" state="Accepted"/>
              <Friend name="José Perez" phone="+507 61867935" state="Accepted"/>
              <Friend name="Marlene Perez" phone="+507 66734913" state="Accepted"/>
            </FriendsList>
          </div>
          <div className="meeting__streaming">
            <OTSession apiKey={meetingData.apiKey}
                       sessionId={meetingData.sessionId}
                       token={meetingData.token}>
              <OTPublisher/>
              <OTStreams>
                <OTSubscriber/>
              </OTStreams>
            </OTSession>
          </div>
        </div>
      }
    </div>
  );
};

export default MeetingView;