import React from "react";
import { Layout } from "antd"
import styled from "@emotion/styled";
import Logo from "components/atoms/Logo";
import IconButton from "components/atoms/IconButton";
import ListIcon from "components/atoms/ListIcon";

const { Header: AntdHeader } = Layout

const HeaderStyled = styled(AntdHeader)`
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  position: sticky;
  top: 0;
  z-index: 999;

  @media screen and (min-width: 769px){
    padding: 0 2rem;
  }
`

const Header = ({ collapsed, onClick }) => {
  return (
    <HeaderStyled>
      {collapsed &&
      <>
        <IconButton onClick={onClick}>
          <ListIcon />
        </IconButton>
        <Logo /> 
      </>
      }
    </HeaderStyled>
  )
}

export default Header