import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";

let theme = createTheme({
  palette: {
    primary: {
      main: "#633CAE"
    },
    secondary: amber,
  },
});

//theme = responsiveFontSizes(theme);

export default theme;