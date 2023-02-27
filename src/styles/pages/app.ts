import { styled } from "..";

export const AppContainer = styled('div', {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

})
export const Card = styled('div', {
  backgroundColor: '$blue500',
  padding: '35px 25px',
  borderRadius: 8,
  width: '750px',

  form: {
    display: 'flex',
    gap: '50px',
    input: {
      width: '100%',
      backgroundColor: 'transparent',
      border: '1px solid #a0a0a0',
      color: '#fff',
      height: '45px',
      padding: '10px',
      fontSize: '$md',
      borderRadius: 8,
    },
    button: {
      backgroundColor: '$yellow',
      border: 'none',
      cursor: 'pointer',
      color: '$blue500',
      fontWeight: '700',
      fontSize: '$sm',
      width: '250px',
      borderRadius: 8,
    }
  }
})