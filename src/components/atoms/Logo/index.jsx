import { Link } from "react-router-dom";
import { HOME_ROUTE } from "utils/route";

const { default: styled } = require("@emotion/styled");

const LogoStyled = styled.span(({ theme }) => ({
  color: theme.text.primary,
  fontWeight: 700,
  fontSize: "2rem",
}))

const Logo = () => <Link to={HOME_ROUTE}><LogoStyled>{process.env.REACT_APP_TITLE}</LogoStyled></Link>
export default Logo