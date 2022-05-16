import styled from "@emotion/styled"

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.tertiary};
  box-shadow: 5px 5px ${({ theme }) => theme.color.tertiaryShade};
  display: flex;
  justify-content: center;
  gap: 3rem;
`

const Error = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Error