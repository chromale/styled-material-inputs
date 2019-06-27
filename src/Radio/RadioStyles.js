import styled from 'styled-components'

const fontColor = 'rgba(0, 0, 0, 0.87)'
const onSurfaceColor = 'rgba(0, 0, 0, 0.6)'
const gray = 'rgb(0, 0, 0, 0.38)'

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
`

export const StyledRadio = styled.label`
  z-index: 0;
  position: relative;
  display: inline-block;
  color: ${fontColor};
  font-family: "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui,
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

  /* Circle */
  & > span::before {
    content: "";
    display: inline-block;
    box-sizing: border-box;
    margin: 2px 10px 2px 0;
    border: solid 2px; /* Safari */
    border-color: ${onSurfaceColor};
    border-radius: 50%;
    width: 20px;
    height: 20px;
    vertical-align: top;
    transition: border-color 0.2s;
  }

  /* Check */
  & > span::after {
    content: "";
    display: block;
    position: absolute;
    top: 2px;
    left: 0;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: ${({ color }) => color};
    transform: translate(5px, 5px) scale(0);
    transition: transform 0.2s;
  }

  /* Checked */
  & > input:checked {
    background-color: ${({ color }) => color};
  }

  & > input:checked + span::before {
    border-color: ${({ color }) => color};
  }

  & > input:checked + span::after {
    transform: translate(5px, 5px) scale(1);
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
    border-color: ${({ color }) => color});
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

  & > input:disabled + span::after {
    background-color: currentColor;
  }
`
