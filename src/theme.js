import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  palette: {
    common: {
      white: '#fff',
      black: '#192026'
    },
    primary: {
      main: '#868686'
    }
  },
  shape: {
    borderRadius: 0
  },
  typography: {
    fontFamily: 'Poppins, Roboto, sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // body: {
        //   '*::-webkit-scrollbar': {
        //     width: '8px',
        //     height: '8px'
        //   },
        //   '*::-webkit-scrollbar-thumb': {
        //     backgroundColor: '#dcdde1',
        //     borderRadius: '8px'
        //   },
        //   '*::-webkit-scrollbar-thumb:hover': {
        //     backgroundColor: 'white'
        //   }
        // }
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableFocusRipple: true
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          '&:hover': {
            backgroundColor: 'transparent'
          }
        }
      }
    }
  }
})

export default theme