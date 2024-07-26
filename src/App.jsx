import { Container } from '@mui/material'
import AppBarComponent from '~/components/AppBar/AppBar.component'
import BodyComponent from '~/components/Body/Body.component'

function App() {

  return (
    <Container
      maxWidth=''
      sx={{
        bgcolor: 'common.black',
        py: 2
      }}>
      <AppBarComponent />
      <BodyComponent />
    </Container>
  )
}

export default App
