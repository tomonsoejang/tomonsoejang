import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    type: "dark",
    background: {
      paper: '#000',
    },
  }
})

export { lightTheme, darkTheme };
