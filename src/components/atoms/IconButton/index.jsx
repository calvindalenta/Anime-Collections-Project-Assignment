import styled from "@emotion/styled";

const IconButtonStyled = styled.button`
  cursor: pointer;
  min-width: 40px;
  min-height: 40px;
  border-radius: 9999px;
  border: none;
  display: flex;  
  justify-content: center;
  align-items: center;
  background-color: inherit;
  &:hover {
    background-color: ${({ theme }) => theme.color.tertiaryShade};
  }
`

const IconButton = ({ children, onClick }) => {
  return (
    <IconButtonStyled onClick={onClick}>
      {children}
    </IconButtonStyled>
  )
}

export default IconButton