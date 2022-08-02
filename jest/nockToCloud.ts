import nock from 'nock';

export const nockToCloud = () =>
  nock('https://raw.githubusercontent.com/24i/smartapps-test/main');
