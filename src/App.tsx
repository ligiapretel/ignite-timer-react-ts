// import { ThemeProvider } from 'styled-components'
// import { BrowserRouter } from 'react-router-dom'
// import { Router } from './Router'
// import { defaultTheme } from './styles/themes/default'
// import { GlobalStyle } from './styles/global'
import { ExampleContextAPI } from './ExampleContextAPI'

export function App() {
  return (
    <ExampleContextAPI />
    // <ThemeProvider theme={defaultTheme}>
    //   <BrowserRouter>
    //     <Router />
    //   </BrowserRouter>
    //   <GlobalStyle />
    // </ThemeProvider>
  )
}
