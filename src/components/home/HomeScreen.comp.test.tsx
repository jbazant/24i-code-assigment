import { fireEvent, render, waitFor } from '@testing-library/react-native';
import nock from 'nock';
import {
  CommonProvidersForTests,
  testingQueryClient,
} from '../../../jest/CommonProvidersForTests';
import { nockToCloud } from '../../../jest/nockToCloud';
import { HomeScreen } from './HomeScreen';

describe('DetailScreen component', () => {
  afterAll(() => {
    testingQueryClient.clear();
  });

  it('should display loading on mount', () => {
    const { getByText } = render(<HomeScreen />, {
      wrapper: CommonProvidersForTests,
    });

    expect(getByText('Loading...')).toBeTruthy();
  });

  it('should fetch data from /data.json on mount', async () => {
    const scope = nockToCloud()
      .get('/data.json')
      .replyWithFile(200, __dirname + '/../../__fixtures__/data.json');
    const { getByText } = render(<HomeScreen />, {
      wrapper: CommonProvidersForTests,
    });

    await waitFor(() => getByText('Pick of the month'));
    expect(getByText('Recommended')).toBeTruthy();
    expect(getByText('Recently watched')).toBeTruthy();

    scope.done();
  });

  describe('with error response', () => {
    let scope: nock.Scope;

    beforeEach(() => {
      scope = nockToCloud().get('/data.json').reply(400, 'INVALID_REQUEST');
    });

    afterEach(() => {
      scope.done();
    });

    it('should display error message on fetch error', async () => {
      const { findByText } = render(<HomeScreen />, {
        wrapper: CommonProvidersForTests,
      });

      expect(await findByText('Error loading data')).toBeTruthy();
    });

    it('should refetch data when user presses "Try again" button', async () => {
      scope
        .get('/data.json')
        .replyWithFile(200, __dirname + '/../../__fixtures__/data.json');
      const { getByText } = render(<HomeScreen />, {
        wrapper: CommonProvidersForTests,
      });

      await waitFor(() => getByText('Error loading data'));
      fireEvent.press(getByText('Try again'));
      await waitFor(() => getByText('Pick of the month'));
    });
  });
});
