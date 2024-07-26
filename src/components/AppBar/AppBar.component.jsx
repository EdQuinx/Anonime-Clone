import { Box, Typography } from '@mui/material'
import MenuItemComponent from '~/components/AppBar/components/MenuItem/MenuItem.component'
import SearchBarComponent from '~/components/AppBar/components/SearchBar/SearchBar.component'

const AppBarComponent = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-around'
    }}>
      {/* LOGO */}
      <Typography
        color={'common.white'}
        fontWeight={600}
        letterSpacing={2}
        fontSize={32}
      >
        Anonime
      </Typography>
      {/* MENU ITEMS */}
      <MenuItemComponent />
      {/* SEARCH BAR */}
      <SearchBarComponent />
    </Box>
  )
}

export default AppBarComponent