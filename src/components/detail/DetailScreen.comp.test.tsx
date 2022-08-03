import { render } from '@testing-library/react-native';
import '@testing-library/jest-native';
import { CommonProvidersForTests } from '../../../jest/CommonProvidersForTests';
import testItem from '../../__fixtures__/singleItem.json';
import { DetailScreen } from './DetailScreen';

describe('DetailScreen', () => {
  it('should display correct data', () => {
    const { getByLabelText } = render(
      <DetailScreen
        route={{ params: testItem } as any}
        navigation={{} as any}
      />,
      {
        wrapper: CommonProvidersForTests,
      }
    );

    expect(getByLabelText('Asset title')).toHaveTextContent('Beetlejuice');
    expect(getByLabelText('Asset plot')).toHaveTextContent(
      /^A couple of recently deceased ghosts contract the services of/
    );
  });
});
