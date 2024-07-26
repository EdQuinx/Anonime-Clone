import InputBase from '@mui/material/InputBase'
import { alpha, styled } from '@mui/material/styles'

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '20px',
  color: 'common.white',
  backgroundColor: alpha('#374151', 0.55),
  '&:hover': {
    backgroundColor: alpha('#374151', 0.65)
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  }
}))

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.primary.main,
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '25ch',
      '&:focus': {
        width: '30ch'
      }
    }
  }
}))
