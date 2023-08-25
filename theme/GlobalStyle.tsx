import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  html{
    scrollbar-gutter: stable;

    body {
      overflow: hidden;
      box-sizing: border-box
    }
  }

  html * {
    font-family: 'Belleza', sans-serif;
    box-sizing: border-box
  }

  a {
    text-decoration: auto;
  }

`

export default GlobalStyle
