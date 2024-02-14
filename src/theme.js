import { createTheme } from '@mui/material/styles';
import { fontSize } from '@mui/system';

let theme = createTheme({
  palette: {
        primary: {
            main: '#D9D9D9',
            white: '#FFFFFFFF',
            black: '#000000',
            accent: '#FB8546',
            accent2: '#FF9960',
            light: '#FFFFFF',

    },
    secondary: {
        main: '#DDFFED99',
    },
    experience: {
        box: '#CDDDFF0A'
    },
    background: '#2F342C', //#18251D
    backgroundNav: '#2F342C85', //#18251D
    background2: '#304B55',
    background2Nav: '#304B5585',
    background3: '#0A0A0A',
  },
  typography: {
    h1: {
        fontFamily: 'Bayon',
        fontSize: '28px',
        letterSpacing: '4.8px',
        textTransform: 'uppercase',
        // '@media (max-width:640px)': {
        //     fontSize: '2.5rem',
        //   },
    },
    h2: { // This is roboto by default -- Navbar
        fontSize: '18px',
        letterSpacing: '1.5px',
    },
    h3: { // Share your prosperity...
        // fontFamily: 'Inter',
        fontSize: '40px',
        lineHeight: '115%',
        textAlign: 'left',
        '@media (max-width:800px)': {
            fontSize: '2rem',
          },
    },
    h6: {
        '@media (max-width:640px)': {
            fontSize: '20px'
          },
    },
    subtitle1: { // Banner
        lineHeight: '18px',
        fontWeight: '500',
        textAlign: 'left',
        // '@media (max-width:640px)': {
        //     fontSize: '18px'
        //   },
    },
    subtitle2: {
        // color: '#989898',
        fontSize: '14px',
        color: 'rgb(100 116 139/var(--tw-text-opacity))',
        '@media (max-width:640px)': {
            fontSize: '16px'
          },
    },
    body1: { // our story text
        fontSize: '18px',
        lineHeight: '32px',//'36px',

    },
  },
  breakpoints: {
    values: { // 520-950  below is tablet
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      tablet: 520,
      desktop: 950, // 1024
    //   desktop: 1200,
    },
  },
});

export default theme;