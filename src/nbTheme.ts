import { extendTheme } from 'native-base';

export const nbTheme = extendTheme({
  colors: {
    primary: '#fb0046',
  },
  components: {
    Badge: {
      defaultProps: {
        borderRadius: 10,
        m: 1,
        bgColor: 'fuchsia.200',
      },
    },
    Button: {
      defaultProps: {
        variant: 'outline',
        my: 2,
        borderRadius: 20,
        _text: {
          fontWeight: 600,
        },
      },
    },
    Spinner: {
      defaultProps: {
        color: 'black',
      },
    },
  },
});
