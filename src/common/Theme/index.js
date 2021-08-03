import { createTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red'

const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
      error: {
        main: red[500],
      }
    },
  });

export default theme