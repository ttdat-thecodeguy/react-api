import { createTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red'
import blue from '@material-ui/core/colors/blue'

const theme = createTheme({
    color: {
      primary: "#2196f3",
      error: "#ff1744"
    },
    typography:{
      fontFamily: "sans-serif"
    },
    shape:{
      borderRadius: 4,
      background: "#ff5722",
      textColor: "#fff"
    }
  });

export default theme