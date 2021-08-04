import styled from "styled-components/macro"
const OUTLINE = "outline"

export const Wrapper = styled.button`
  position: relative;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: ${props =>
    props.variant === OUTLINE
      ? props.theme.color.light
      : props.theme.color.primary};
  color: ${props =>
    props.variant === OUTLINE
      ? props.theme.color.primary
      : props.theme.color.light};

  border: ${props =>
    props.variant === OUTLINE
      ? `1px solid ${props.theme.color.primary}`
      : `1px solid transparent`};

  box-shadow: "0px 6px 2px -4px rgba(14, 14, 44, 0.1), inset 0px -1px 0px rgba(14, 14, 44, 0.4)";
  border-radius: 8px;
  ${props => props.theme.text.button};
  transition: all 250ms ease-in;

  &:hover,
  &:focus {
    cursor: pointer;
    opacity: 0.9;
    color: ${props =>
      props.variant === OUTLINE
        ? props.theme.color.light
        : props.theme.color.primary};
    background: ${props =>
      props.variant === OUTLINE
        ? props.theme.color.primary
        : props.theme.color.light};

    border: ${props =>
      props.variant !== OUTLINE
        ? `1px solid ${props.theme.color.primary}`
        : `1px solid transparent`};
  }

  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`
