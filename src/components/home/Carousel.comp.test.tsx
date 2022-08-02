import { render } from '@testing-library/react-native';
import '@testing-library/jest-native';
import { CommonProvidersForTests } from '../../../jest/CommonProvidersForTests';
import { Carousel } from './Carousel';
import testItem from '../../__fixtures__/singleItem.json';

describe('Carousel', () => {
  it('should display title of given carousel and item', () => {
    const { getByLabelText } = render(
      <Carousel title={'TITLE'} items={[testItem]} />,
      {
        wrapper: CommonProvidersForTests,
      }
    );

    expect(getByLabelText('Section title')).toHaveTextContent('TITLE');
    expect(getByLabelText('Asset title')).toHaveTextContent('Beetlejuice');
  });
});
