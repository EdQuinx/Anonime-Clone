import { Box, Typography } from '@mui/material'
import CarouselComponent from '~/components/Body/components/Explore/Carousel/Carousel.component'

const ExploreComponent = ({ movieId }) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      mb: 3
    }}>
      <Typography
        color={'common.white'}
        fontWeight={600}
        letterSpacing={2}
        fontSize={28}
      >
        Explore
      </Typography>
      <Typography
        color={'primary'}
      >
        What are you gonna watch today?
      </Typography>
      <CarouselComponent movieId={movieId} />
    </Box> )
}

export default ExploreComponent