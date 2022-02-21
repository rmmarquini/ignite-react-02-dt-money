import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.form`

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
    
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: .25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter ease .2s;

    &:hover {
      filter: brightness(0.9);
    }

  }

`

export const TransactionTypeContainer = styled.div`

  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .5rem;

`

/**
 * Using props to define styles through an object state.
 * So the interface RadioBoxProps stores the two props 
 * to enable the functionality of which button is active
 * and then set the correct background color as mapped
 * on the colors object.
 */
interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`

  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${(props) => props.isActive
    ? transparentize(0.85, colors[props.activeColor])
    : 'transparent'
  };

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 4.5rem;

  transition: border-color ease .2s;

  &:hover {
    border-color: ${darken(0.15, '#d7d7d7')}
  }

  img {
    width: 24px;
    height: 24px;
  }

  span {
    display: inline-block;
    font-size: 1rem;
    color: var(--text-title);
  }

`