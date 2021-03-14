import { createMuiTheme } from '@material-ui/core/styles';


export const pxToRem = px => `${px / 22.5}rem`;
export const pxToVw = px =>
  `${(100 / document.documentElement.clientWidth) * px}vw`;

export const pxToVh = px =>
  `${px / (document.documentElement.clientHeight * 0.01)}vh`;

export default createMuiTheme({
  palette: {
    primary: {
      main: '#1B1F38',
      light: 'rgb(93,175,240,0.5)',
      dark: 'rgb(93,175,240,0.2)',
    },
    colors: {
      color_58687E: "#58687E",
      color_39495E: "#39495E",
      color_CD7925_ORANGE: "#CD7925",
      color_FFFFFF_WHITE: "#FFFFFF",
      color_273D49CC: "#273D49CC",
      color_61707B: "#61707B",
      color_283A46: "#283A46",
      color_2A5368: "#2A5368",
      color_97A1A9: "#97A1A9",
      color_FF5B5B_RED: "#FF5B5B",
      color_97A1A8: "#97A1A8",
      color_14AFF1_SKYBLUE: "#14AFF1",
      color_00000008: "#00000008",
      color_356680: "#356680",
      transparent: "transparent",
    },
    font: {
      ubuntu: 'normal normal normal Ubuntu'
    }
  }
});
