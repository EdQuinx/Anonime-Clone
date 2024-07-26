import { Box, Button } from '@mui/material'

const MenuItemComponent = () => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10
    }}>
      <Button>
            Home
      </Button>
      <Button>
            List anime
      </Button>
    </Box>
  )
}

export default MenuItemComponent