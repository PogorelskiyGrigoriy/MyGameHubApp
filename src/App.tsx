import { Box, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        md: '"nav nav" "aside main"',
      }}
      templateColumns={{
        base: "1fr",
        md: "200px 1fr", // Фиксируем ширину для aside на десктопе
      }}
    >
      <GridItem area="nav">
        <Nav />
      </GridItem>

      <GridItem area="aside" paddingX={5} hideBelow="md">
        <Box
          height="calc(100vh - 80px)" // Высота экрана минус примерная высота Nav
          overflowY="auto"
          position="sticky"
          top="80px" // Чтобы список не уезжал вверх при прокрутке основной страницы
          pr={2} // Отступ справа, чтобы скроллбар не перекрывал текст
        >
          <GenreList />
        </Box>
      </GridItem>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
export default App;
