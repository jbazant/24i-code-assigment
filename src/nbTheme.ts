import { extendTheme } from 'native-base';

export const nbTheme = extendTheme({
  colors: {
    primary: '#fb0046',
  },
  components: {
    Button: {
      defaultProps: {
        variant: 'outline',
        my: 2,
        borderRadius: 20,
      },
    },
    Spinner: {
      defaultProps: {
        color: 'black',
      },
    },
  },
});