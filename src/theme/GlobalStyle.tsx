import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
${reset}
@font-face {
  font-family: 'Stacion';
  src: url('/fonts/stacion-italic.otf');
  src: url('/fonts/stacion-light-italic.otf');
  src: url('/fonts/stacion-light.otf');
  src: url('/fonts/stacion-regular.otf');
}

@font-face {
  font-family: 'GT Planar';
  src: url('/fonts/gt.ttf');
}

html{
  scrollbar-gutter: stable;
  margin: 0;

  body {
    font-family: "Stacion";
  }
}

html * {
  font-family: "Stacion";
}

  a {
    text-decoration: auto;
    color: #1D1D1E;
    font-family: GT Planar;
    font-size: 1.0625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5625rem;
  }
  code {
    text-align: right;
    font-family: GT Planar;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; 
    letter-spacing: 0.0625rem;
    text-transform: uppercase;

  }
`

export default GlobalStyle
