import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#EAE7DC',
        dark: '#D8C3A5'
    },
    secondary: {
        light: '#E98074',
        main: '#E85A4F',
    },
    text: {
        secondary: '#8E8D8A'
    }
  },
});

export default theme;