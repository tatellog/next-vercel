import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
${reset}
html{
  scrollbar-gutter: stable;
  margin: 0;

  body {
    overflow-y: scroll;
  }
}

html * {
  font-family: 'Noto Sans';
}

  a {
    text-decoration: auto;
  }

`

export default GlobalStyle
