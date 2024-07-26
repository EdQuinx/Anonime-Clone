import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import CarouselImage from '~/assets/carousel.png'
import { ANONIME } from '~/contants'
const CarouselComponent = ({ movieId }) => {
  const [bannerInfo, setBannerInfo] = useState({
    movieName: 'Weather With You',
    description: 'Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis'
  })

  useEffect(() => {
    if (movieId) {
      const data = ANONIME.data[movieId]

      setBannerInfo({
        movieName: data.movieName,
        description: data.description
      })
    }
  }, [movieId])

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${CarouselImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: '50%',
          height: '500px',
          display: 'flex',
          flexDirection: 'column-reverse',
          p: 6
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          width: '600px'
        }}>
          <Typography
            color={'common.white'}
            fontWeight={600}
            letterSpacing={2}
            fontSize={32}
            sx={{ textShadow: '1px 1px 1px #000' }}
          >
            {bannerInfo.movieName}
          </Typography>
          <Typography
            color={'common.white'}
            fontWeight={400}
            fontSize={16}
            sx={{ textShadow: '1px 1px 1px #000' }}
          >
            {bannerInfo.description}
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default CarouselComponent