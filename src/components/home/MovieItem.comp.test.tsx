import { render } from '@testing-library/react-native';
import '@testing-library/jest-native';
import { CommonProvidersForTests } from '../../../jest/CommonProvidersForTests';
import { MovieItem } from './MovieItem';
import testItem from '../../__fixtures__/singleItem.json';

describe('MovieItem', () => {
  it('should display title of given item', () => {
    const { getByLabelText } = render(<MovieItem item={testItem} />, {
      wrapper: CommonProvidersForTests,
    });

    expect(getByLabelText('Asset title')).toHaveTextContent('Beetlejuice');
  });
});
