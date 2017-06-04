import styled from 'styled-components';

const extraSpecialStyles = `
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-top: 50px solid var(--fg);
    border-left: 50px solid transparent;
  }
`;

export const Dog = styled.div.attrs({
  className: 'Dog',
})`
  background: var(--bg);
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  @media (min-width: 400px) {
    flex-direction: row;
  }

  ${props => props.extraSpecial ? extraSpecialStyles : null}
`;


/*
** An alternative way to including special styles would be to export a completely separate component

export const ExtraSpecialDog = Dog.extend`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-top: 50px solid red;
    border-left: 50px solid transparent;
  }
`;
*/

export const Image = styled.div`
  flex-basis: 125px;
  height: auto;
  flex-shrink: 0;
  background: white;
  padding: 5px;
  padding-bottom: 0;
  box-sizing: border-box;

  @media (min-width: 400px) {
    height: 150px;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;

    @media (min-width: 400px) {
      height: 115px;
    }
  }

  h3 {
    font-size: 22px;
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;

  p {
    display: inline-block;
  }

  button {
    align-self: flex-end;
    padding: 5px;
    cursor: pointer;
    background-color: var(--bg);
    color: var(--fg);
    border: 1px solid var(--fg);

    &:hover {
      background-color: transparent;
      color: white;
      border: 1px solid white;
    }
  }
`;
