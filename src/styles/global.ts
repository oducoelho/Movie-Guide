import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',    
  },

  html: {
    fontSize: '62.5%',
  },
  
  body: {
    height: '100vh',
    background: 'linear-gradient(#1c1917 50%, #ffb92a 50%)',
  },
  
  'body, input, button': {
    fontFamily: 'Roboto',
    fontWeight: 500,
  },  
})