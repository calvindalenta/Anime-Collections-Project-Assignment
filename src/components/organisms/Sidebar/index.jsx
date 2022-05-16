import styled from "@emotion/styled";
import { Layout, Space } from "antd";
import BookIcon from "components/atoms/BookIcon";
import CloseIcon from "components/atoms/CloseIcon";
import HomeIcon from "components/atoms/HomeIcon";
import IconButton from "components/atoms/IconButton";
import Logo from "components/atoms/Logo";
import SwitchTheme from "components/atoms/SwitchTheme";
import Text from "components/atoms/Text";
import NavItem from "components/molecules/NavItem";
import { COLLECTIONS_ROUTE, HOME_ROUTE } from "utils/route";

const { Sider } = Layout

const SidebarStyled = styled(Sider)`
  background-color: ${({ theme }) => theme.color.tertiary};
  overflow: auto;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
`

const Container = styled.div`
  padding: 1.5rem 1rem 1rem 1rem;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`

const CloseContainer = styled.div`
  position: absolute;
  top: 10;
  right: 0;
`

const Sidebar = ({ collapsed, onClose }) => {
  const path = window.location.pathname
  
  return (
    <SidebarStyled 
      collapsible 
      width={300}
      trigger={null} 
      collapsedWidth={0}
      collapsed={collapsed}
    >
      <CloseContainer>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </CloseContainer>
      <Container>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Space direction="vertical" style={{ width: "100%" }}>
          <NavItem 
            icon={<HomeIcon />}
            text={<Text size="Normal" type="Semibold">Home</Text>}
            selected={path === HOME_ROUTE}
            href={HOME_ROUTE}
          />
          <NavItem 
            icon={<BookIcon />}
            text={<Text size="Normal" type="Semibold">Collections</Text>}
            selected={path === COLLECTIONS_ROUTE}
            href={COLLECTIONS_ROUTE}
          />
          <SwitchTheme />
        </Space>
      </Container>
    </SidebarStyled>
  )
}

export default Sidebar