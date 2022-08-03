import { fireEvent, render } from '@testing-library/react-native';
import '@testing-library/jest-native';
import { CommonProvidersForTests } from '../../../jest/CommonProvidersForTests';
import { MovieItem } from './MovieItem';
import testItem from '../../__fixtures__/singleItem.json';

const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');

  return {
    ...actualNav,
    useNavigation: () => ({ navigate: mockNavigate }),
  };
});

describe('MovieItem', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should display title of given item', () => {
    const { getByLabelText } = render(<MovieItem item={testItem} />, {
      wrapper: CommonProvidersForTests,
    });

    expect(getByLabelText('Asset title')).toHaveTextContent('Beetlejuice');
  });

  it('should navigate to Detail screen on item press', () => {
    const { getByLabelText } = render(<MovieItem item={testItem} />, {
      wrapper: CommonProvidersForTests,
    });

    fireEvent.press(getByLabelText('Asset title'));

    expect(mockNavigate).toHaveBeenCalledWith('Detail', testItem);
  });
});
