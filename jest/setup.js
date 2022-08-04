/* eslint-env jest */

import nock from 'nock';

nock.disableNetConnect();

jest.mock('react-navigation-shared-element', () => ({
  createSharedElementStackNavigator: jest.fn(),
  SharedElement: ({ children }) => children,
}));
