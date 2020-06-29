
import axios from 'axios';

import settings from '../settings';

/**
 * Generate token for meeting
 * @param meetingId
 * @param source
 * @returns {Promise<AxiosResponse<any>>}
 */
const createMeetingToken = (meetingId, source = null) => axios.post(
  `${settings.baseApi}/meeting/${meetingId}/token`,
  {
    cancelToken: source && source.token
  }
);

export default {
  createMeetingToken
};