import styled from 'styled-components'

const fontColor = 'rgba(0, 0, 0, 0.87)'
const onSurfaceColor = 'rgba(0, 0, 0, 0.6)'
const hoverColor = 'rgba(0, 0, 0, 0.9)'
const borderColor = 'rgba(0, 0, 0, 0.37)'
const gray = 'rgb(0, 0, 0, 0.38)'

const StyledTextField = styled.label`
  position: relative;
  display: inline-block;
  padding-top: 6px;
  font-family: 'Roboto', 'Segoe UI', BlinkMacSystemFont, system-ui,
    -apple-system;
  font-size: 14px;
  line-height: 1.5;
  overflow: hidden;

  /* Input, Textarea */
  & > input,
  & > textarea {
    box-sizing: border-box;
    margin: 0;
    border: solid 1px; /* Safari */
    border-color: ${borderColor};
    border-top-color: transparent;
    border-radius: 4px;
    padding: 15px 13px 15px;
    width: 100%;
    height: inherit;
    color: ${fontColor};
    background-color: transparent;
    box-shadow: none; /* Firefox */
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    caret-color: ${({ color }) => color};
    transition: border 0.2s, box-shadow 0.2s;
  }

  /* Span */
  & > input + span,
  & > textarea + span {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    border-color: ${onSurfaceColor};
    width: 100%;
    max-height: 100%;
    color: ${onSurfaceColor};
    font-size: 75%;
    line-height: 15px;
    cursor: text;
    transition: color 0.2s, font-size 0.2s, line-height 0.2s;
  }

  /* Corners */
  & > input + span::before,
  & > input + span::after,
  & > textarea + span::before,
  & > textarea + span::after {
    content: '';
    display: block;
    box-sizing: border-box;
    margin-top: 6px;
    border-top: solid 1px;
    border-top-color: ${borderColor};
    min-width: 10px;
    height: 8px;
    pointer-events: none;
    box-shadow: inset 0 1px transparent;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  & > input + span::before,
  & > textarea + span::before {
    margin-right: 4px;
    border-left: solid 1px transparent;
    border-radius: 4px 0;
  }

  & > input + span::after,
  & > textarea + span::after {
    flex-grow: 1;
    margin-left: 4px;
    border-right: solid 1px transparent;
    border-radius: 0 4px;
  }

  /* Hover */
  &:hover > input,
  &:hover > textarea {
    border-color: ${hoverColor};
    border-top-color: transparent;
  }

  &:hover > input + span::before,
  &:hover > textarea + span::before,
  &:hover > input + span::after,
  &:hover > textarea + span::after {
    border-top-color: ${hoverColor};
  }

  &:hover > input:not(:focus):placeholder-shown,
  &:hover > textarea:not(:focus):placeholder-shown {
    border-color: ${onSurfaceColor};
  }

  /* Placeholder-shown */
  & > input:not(:focus):placeholder-shown,
  & > textarea:not(:focus):placeholder-shown {
    border-top-color: ${borderColor};
  }

  & > input:not(:focus):placeholder-shown + span,
  & > textarea:not(:focus):placeholder-shown + span {
    font-size: inherit;
    line-height: 68px;
  }

  & > input:not(:focus):placeholder-shown + span::before,
  & > textarea:not(:focus):placeholder-shown + span::before,
  & > input:not(:focus):placeholder-shown + span::after,
  & > textarea:not(:focus):placeholder-shown + span::after {
    border-top-color: transparent;
  }

  /* Focus */
  & > input:focus,
  & > textarea:focus {
    border-color: ${({ color }) => color};
    border-top-color: transparent;
    box-shadow: inset 1px 0 ${({ color }) => color},
      inset -1px 0 ${({ color }) => color}, inset 0 -1px ${({ color }) => color};
    outline: none;
  }

  & > input:focus + span,
  & > textarea:focus + span {
    color: ${({ color }) => color};
  }

  & > input:focus + span::before,
  & > input:focus + span::after,
  & > textarea:focus + span::before,
  & > textarea:focus + span::after {
    border-top-color: ${({ color }) => color} !important;
    box-shadow: inset 0 1px ${({ color }) => color};
  }

  /* Disabled */
  & > input:disabled,
  & > input:disabled + span,
  & > textarea:disabled,
  & > textarea:disabled + span {
    border-color: ${gray} !important;
    border-top-color: transparent !important;
    color: ${gray};
    pointer-events: none;
  }

  & > input:disabled + span::before,
  & > input:disabled + span::after,
  & > textarea:disabled + span::before,
  & > textarea:disabled + span::after {
    border-top-color: ${gray} !important;
  }

  & > input:disabled:placeholder-shown,
  & > input:disabled:placeholder-shown + span,
  & > textarea:disabled:placeholder-shown,
  & > textarea:disabled:placeholder-shown + span {
    border-top-color: ${gray} !important;
  }

  & > input:disabled:placeholder-shown + span::before,
  & > input:disabled:placeholder-shown + span::after,
  & > textarea:disabled:placeholder-shown + span::before,
  & > textarea:disabled:placeholder-shown + span::after {
    border-top-color: transparent !important;
  }

  /* Faster transition in Safari for less noticable fractional font-size issue */
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      & > input,
      & > input + span,
      & > textarea,
      & > textarea + span,
      & > input + span::before,
      & > input + span::after,
      & > textarea + span::before,
      & > textarea + span::after {
        transition-duration: 0.1s;
      }
    }
  }
`

export default StyledTextField
