import { Box } from '@mui/material'
import ImageButtonComponent from '~/components/Body/components/NewRelease/components/CardList/components/ImageButton/ImageButton.component'
import { ANONIME } from '~/contants'

const CardListComponent = ({ setMovieId }) => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      gap: 2
    }}>
      {ANONIME.data.map((item, idx) => (
        (idx > 0 && <ImageButtonComponent
          key={idx}
          data={item}
          setMovieId={setMovieId}
        />
        )
      ))}
    </Box>
  )
}

export default CardListComponent