import { extendTheme } from 'native-base';

export const nbTheme = extendTheme({
  colors: {
    primary: '#fb0046',
  },
  components: {
    Spinner: {
      defaultProps: {
        color: 'black',
      },
    },
  },
});
