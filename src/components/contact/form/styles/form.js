import styled, { css } from "styled-components/macro"

export const sharedStyles = css`
  background-color: ${props => props.theme.color.accent};
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.color.subtle};
  margin: 10px 0 20px 0;
  padding: 20px;
`

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 100%;
`

export const StyledForm = styled.div`
  width: 95%;
  max-width: 700px;
  padding: 32px;
  background-color: ${props => props.theme.color.white};
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`

export const StyledTextArea = styled.textarea`
  background-color: ${props => props.theme.color.accent};
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`

export const Title = styled.h2`
  ${props => props.theme.text.h3}
  padding-bottom: 16px;
`

export const StyledError = styled.div`
  ${props => props.theme.text.bold}
  color: ${props => props.theme.color.error};
  margin: 0 0 32px 0;
`
export const StyledSuccess = styled(StyledError)`
  color: ${props => props.theme.color.success};
`
export const StyledLabel = styled.label`
  color: ${props => props.theme.color.subtle};
  ${props => props.theme.text.body}
  margin: 0 0 32px 0;
`
export const ButtonContainer = styled.div`
  width: 100%;
  & button {
    width: 100%;
  }
`
