import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  background-color: ${({ theme, selected }) => selected ? theme.color.primary : "inherit" };
  border-radius: 0.3rem;
  padding: 0.3rem;
  cursor: pointer;

  & span {
    color: ${({ theme, selected }) => selected ? theme.text.secondary : theme.text.primary};
  }

  &:hover {
    background-color: ${({ theme, selected }) => selected ? theme.color.primaryShade : theme.color.tertiaryShade };
  }
`

const NavItem = ({ href, icon, text, selected, onClick }) => {
  return (
    <Link to={href}>
      <Container selected={selected} onClick={onClick}>
        {icon}
        {text}
      </Container>
    </Link>
  )
}

export default NavItem