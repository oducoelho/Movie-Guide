import { createStitches } from "@stitches/react"

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      blue500: '#1e293b',
      yellow: '#ffb92a',
      white: '#ffffff',
      gray: '#a0a0a0'
    },

    fontSizes: {
      ss: '1.2rem',
      sm: '1.4rem',
      md: '1.8rem',
      '2md': '1.9rem',
      lg: '2.0rem',
      xl: '2.4rem',
      '2xl': '3.2rem',
      '3xl': '3.6rem',
      '5xl': '10rem',
    }
  }
})