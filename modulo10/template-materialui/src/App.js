import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <ListarTarefa />
      </ThemeProvider>
    </div>
  );
}

export default App;
