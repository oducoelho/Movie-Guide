import { styled } from "..";

export const AppContainer = styled('div', {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

})
export const Card = styled('div', {
  backgroundColor: '$blue500',
  padding: '15px',
  borderRadius: 8,
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  top: '50%',
  left: '50%',

  form: {
    display: 'grid',
    gridTemplateColumns: '9fr 3fr',
    gap: '1.2em',
    input: {
      width: '400px',
      backgroundColor: 'transparent',
      border: '1px solid #a0a0a0',
      color: '#fff',
      padding: '0.7em',
    },
    button: {
      backgroundColor: '$yellow',
      border: 'none',
      cursor: 'pointer',
      color: '$blue500',
      fontWeight: '700',
      fontSize: '$sm'
    }
  }
})