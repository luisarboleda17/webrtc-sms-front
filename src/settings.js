
/**
 * Get API URL based on environment
 * @returns {string}
 */
const getBaseAPIUrl = () => {
  const LOCAL_API = 'http://localhost:25000';
  const PROD_API = 'http://3.22.41.113:15000';
  return process.env.REACT_APP_ENV === 'prod' ? PROD_API : LOCAL_API;
};

export const settings = {
  baseApi: getBaseAPIUrl()
};
export default settings;