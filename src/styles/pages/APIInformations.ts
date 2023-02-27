import { styled } from "..";

export const InformationsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '30px',
})
export const PartOne = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  textAlign: 'center',
  img: {
    borderRadius: 8,
    width: '250px'
  }
})
export const InformationsPartOne = styled('div', {  
  color: '$white',

  paddingTop: '20px',
  marginRight: '85px',
  h1: {
    fontSize: '20px',
    paddingBottom: '20px',
  },
  span: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontSize: '$lg',
    img: {
      width: '20px',
    }
  }
})
export const OtherInformations = styled('div', {
  textAlign: 'center',
  gap: '30px',
  marginLeft: '25px',
  padding: '20px 0px',

  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  span: {
    fontSize: '$sm',
    fontWeight: '500',
    color: '$gray',
  }
})
export const Genero = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  fontSize: '$lg',
  div: {
    border: '1px solid $gray',
    fontSize: '0.75em',
    padding: '0.4em 1.6em',
    borderRadius: '0.4em',
    fontWeight: '300',
  }
})
export const PartTwo = styled('div', {
  paddingTop: '20px',
  lineHeight: 1.6,
  div: {
    p: {
      fontSize: '$lg',
      color: '$white',
    },
    span: {
      fontSize: '$md',
      color: '$gray',
      fontWeight: '500',
      lineHeight: 1.3,

    }
  }
})
export const Error = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  color: '$white',
  fontWeight: '700',
  fontSize: '$lg',
  padding: '50px 0px 20px 0px'
})