import styled from "@emotion/styled"

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.tertiary};
  box-shadow: 5px 5px ${({ theme }) => theme.color.tertiaryShade};
  display: flex;
  justify-content: center;
  gap: 3rem;

  & .ant-empty-description {
    color: ${({ theme }) => theme.text.primary} !important;
  }
`

const Error = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Error