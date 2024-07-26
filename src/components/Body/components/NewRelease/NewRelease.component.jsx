import { Box, Typography } from '@mui/material'
import CardListComponent from '~/components/Body/components/NewRelease/components/CardList/CardList.component'

const NewReleaseComponent = ({ setMovieId }) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }}>
      <Typography
        color={'common.white'}
        fontWeight={600}
        letterSpacing={2}
        fontSize={28}
      >
        New Release
      </Typography>
      <CardListComponent setMovieId={setMovieId} />
    </Box>
  )
}

export default NewReleaseComponent