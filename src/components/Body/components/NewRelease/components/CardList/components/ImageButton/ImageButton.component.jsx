import { Box, Typography } from '@mui/material'
import { Image, ImageBackdrop, ImageButton, ImageSrc } from '~/components/Body/components/NewRelease/components/CardList/components/ImageButton/styled'

const ImageButtonComponent = ({ data, setMovieId }) => {
  const handleChangeMovieId = () => {
    setMovieId(data.id - 1)
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <ImageButton
        onClick={handleChangeMovieId}
        focusRipple
        key={data.movieName}
        style={{
          width: 230
        }}
      >
        <ImageSrc style={{ backgroundImage: `url(${data.image})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            sx={{
              position: 'relative',
              p: 4,
              pt: 2,
              opacity: 0.9,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`
            }}
          >
          Episode {data.episode}
          </Typography>
        </Image>
      </ImageButton>
      <Typography
        color="common.white"
        fontSize={14}
        sx={{
          p: 4,
          pt: 2,
          pb: (theme) => `calc(${theme.spacing(1)} + 6px)`
        }}
      >
        {data.movieName}
      </Typography>
    </Box>
  )
}

export default ImageButtonComponent