import styled from 'styled-components'

const fontColor = 'rgba(0, 0, 0, 0.87)'
const onSurfaceColor = 'rgba(0, 0, 0, 0.6)'
const hoverColor = 'rgba(0, 0, 0, 0.9)'
const borderColor = 'rgba(0, 0, 0, 0.37)'
const gray = 'rgb(0, 0, 0, 0.38)'

const StyledCheckBox = styled.label`
  z-index: 0;
  position: relative;
  display: inline-block;
  color: ${fontColor};
  font-family: 'Roboto', 'Segoe UI', BlinkMacSystemFont, system-ui,
    -apple-system;
  font-size: 14px;
  line-height: 1.8;

  /* Input */
  & > input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    z-index: -1;
    position: absolute;
    left: -10px;
    top: -8px;
    display: block;
    margin: 0;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-color: ${onSurfaceColor};
    box-shadow: none;
    outline: none;
    opacity: 0;
    transform: scale(1);
    pointer-events: none;
    transition: opacity 0.3s, transform 0.2s;
  }

  /* Span */
  & > span {
    display: inline-block;
    width: 100%;
    cursor: pointer;
  }

  /* Box */
  & > span::before {
    content: '';
    display: inline-block;
    box-sizing: border-box;
    margin: 3px 11px 3px 1px;
    border: solid 2px; /* Safari */
    border-color: ${onSurfaceColor};
    border-radius: 2px;
    width: 18px;
    height: 18px;
    vertical-align: top;
    transition: border-color 0.2s, background-color 0.2s;
  }

  /* Checkmark */
  & > span::after {
    content: '';
    display: block;
    position: absolute;
    top: 3px;
    left: 1px;
    width: 10px;
    height: 5px;
    border: solid 2px transparent;
    border-right: none;
    border-top: none;
    transform: translate(3px, 4px) rotate(-45deg);
  }

  /* Checked, Indeterminate */
  & > input:checked,
  & > input:indeterminate {
    background-color: ${({ color }) => color};
  }

  & > input:checked + span::before,
  & > input:indeterminate + span::before {
    border-color: ${({ color }) => color};
    background-color: ${({ color }) => color};
  }

  & > input:checked + span::after,
  & > input:indeterminate + span::after {
    border-color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
  }

  & > input:indeterminate + span::after {
    border-left: none;
    transform: translate(4px, 3px);
  }

  /* Hover, Focus */
  &:hover > input {
    opacity: 0.04;
  }

  & > input:focus {
    opacity: 0.12;
  }

  &:hover > input:focus {
    opacity: 0.16;
  }

  /* Active */
  & > input:active {
    opacity: 1;
    transform: scale(0);
    transition: transform 0s, opacity 0s;
  }

  & > input:active + span::before {
    border-color: ${({ color }) => color};
  }

  & > input:checked:active + span::before {
    border-color: transparent;
    background-color: ${onSurfaceColor};
  }

  /* Disabled */
  & > input:disabled {
    opacity: 0;
  }

  & > input:disabled + span {
    color: ${gray};
    cursor: initial;
  }

  & > input:disabled + span::before {
    border-color: currentColor;
  }

  & > input:checked:disabled + span::before,
  & > input:indeterminate:disabled + span::before {
    border-color: transparent;
    background-color: currentColor;
  }
`

export default StyledCheckBox
