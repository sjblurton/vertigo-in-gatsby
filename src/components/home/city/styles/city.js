import styled from "styled-components/macro"

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`
