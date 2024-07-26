import { Container } from '@mui/material'
import { useState } from 'react'
import ExploreComponent from '~/components/Body/components/Explore/Explore.component'
import NewReleaseComponent from '~/components/Body/components/NewRelease/NewRelease.component'

const BodyComponent = () => {
  const [movieId, setMovieId] = useState(0)

  return (
    <Container
      maxWidth='xl'
      sx={{
        my: 3
      }}>
      <ExploreComponent movieId={movieId} />
      <NewReleaseComponent setMovieId={setMovieId} />
    </Container>
  )
}

export default BodyComponent