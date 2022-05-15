const { default: styled } = require("@emotion/styled");

const LogoStyled = styled.span(({ theme }) => ({
  color: theme.text.primary,
  fontWeight: 700,
  fontSize: "2rem",
}))

const Logo = () => <LogoStyled>{process.env.REACT_APP_TITLE}</LogoStyled>
export default Logo