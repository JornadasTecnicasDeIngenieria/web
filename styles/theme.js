import { createTheme } from '@mui/material/styles';
import { amber } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: '#633CAE',
      light: '#83ddff',
      dark: '#3c3c54',
    },
    secondary: {
      main: '#ff645f',
      light: '#ffeb83',
      dark: '#c41c35',
    },
    background: {
      default: '#f4f6f8',
      paper: '#ffffff',
    },
    text: {
      primary: '#3c3c54',
      secondary: '#545d7a',
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Roboto", sans-serif',
    },
    button: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
