import { AppRouter } from "./Router"
import { ThemeProvider } from "styled-components"
import light from "./styles/themes/light"
import { GlobalStyle } from "./styles/global"
function App() {

  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <>
        <AppRouter />
      </>
    </ThemeProvider>
  )
}

export default App
