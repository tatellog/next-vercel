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
    overflow-y: scroll;
    font-family: "Stacion";
  }
}

html * {
  font-family: "Stacion";
}

  a {
    text-decoration: auto;
  }

`

export default GlobalStyle
