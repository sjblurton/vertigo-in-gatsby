import styled from "styled-components/macro"

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100wv;
  height: 100hv;
  background-color: ${props => props.theme.color.secondary};
  @media (max-width: 600px) {
    flex-direction: column;
  }
`
