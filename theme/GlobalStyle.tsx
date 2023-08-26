import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  html{
    scrollbar-gutter: stable;
    height: 100%;
    width: 100%;
    font-family: 'Belleza', sans-serif;
    box-sizing: border-box;

    body {
      overflow: hidden;
      
    }
  }

  html * {
    font-family: 'Belleza', sans-serif;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  }

  a {
    text-decoration: auto;
  }

`

export default GlobalStyle
