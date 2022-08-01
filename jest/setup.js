import nock from 'nock';

nock.disableNetConnect();
global.nockToCloud = () =>
  nock('https://raw.githubusercontent.com/24i/smartapps-test/main');
