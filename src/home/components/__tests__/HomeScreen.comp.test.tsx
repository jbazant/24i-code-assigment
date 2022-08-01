import { render } from '@testing-library/react-native';
import { CommonProvidersForTests } from '../../../../jest/CommonProvidersForTests';
import { HomeScreen } from '../HomeScreen';

describe('DetailScreen component', () => {
  it('should display loading on mount', () => {
    const { getByText } = render(<HomeScreen />, {
      wrapper: CommonProvidersForTests,
    });

    expect(getByText('Loading...')).toBeTruthy();
  });
});
