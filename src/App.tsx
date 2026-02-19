import { Grid, GridItem, Stack } from '@chakra-ui/react'
import './App.css'
import { ColorModeButton } from './components/ui/color-mode'

function App() {

  return (
    <Grid templateAreas={{
      base: '"nav" "main"',
      md:  '"nav nav" "aside main"',
    }}>
      <GridItem area="nav" bg="blue.500">
        <ColorModeButton>
        
        </ColorModeButton>
      NAV
      </GridItem>
 
      <Stack hideBelow={"md"} bg="gray.500">
        <GridItem area="aside">
        ASIDE
        </GridItem>
      </Stack>

      <GridItem area="main" bg="green.500">
      MAIN
      </GridItem>
    </Grid>
  )
}
export default App
