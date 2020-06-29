
/**
 * Get API URL based on environment
 * @returns {string}
 */
const getBaseAPIUrl = () => {
  const LOCAL_API = 'http://localhost:5010';
  const PROD_API = 'https://api.popularis.app:5010';
  return process.env.REACT_APP_ENV === 'prod' ? PROD_API : LOCAL_API;
};

export const settings = {
  baseApi: getBaseAPIUrl()
};
export default settings;