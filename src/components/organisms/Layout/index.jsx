import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from 'components/organisms/Sidebar';
import Header from 'components/molecules/Header';
import styled from '@emotion/styled';

const { Content } = Layout;

const ContentStyled = styled(Content)`
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.secondary};

  @media screen and (min-width: 769px){
    padding: 2rem;
  }
`

function AppLayout({ children }){
  const [sidebar, setSidebar] = useState(false)

  return (
    <Layout>
      <Sidebar 
        collapsed={!sidebar} 
        onClose={() => setSidebar(false)}
      />
      <Layout>
        <Header 
          collapsed={!sidebar}
          onClick={() => setSidebar(true)}
        />
        <ContentStyled>
          {children}
        </ContentStyled>
      </Layout>
    </Layout>
  );
}

export default AppLayout