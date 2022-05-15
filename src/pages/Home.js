import styled from "@emotion/styled"
import { Popover, Space } from "antd"
import IconButton from "components/atoms/IconButton"
import Text from "components/atoms/Text"
import AnimeList from "components/organisms/AnimeList"
import HistoryList from "components/organisms/HistoryList"
import AppLayout from "components/organisms/Layout"
import PlusIcon from "components/atoms/PlusIcon";
import ModalBulkAdd from "components/organisms/ModalBulkAdd"
import { useState } from "react"
import useTitle from "hooks/useTitle"

const Container = styled.div`
  @media screen and (min-width: 769px){
    display: grid;
    gap: 1rem;
    grid-template-columns: 3fr 1fr;
  }
`

const Spacer = styled(Space)`
  width: 100%;
  margin-bottom: 2rem;
`

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`

const Home = (props) => {
  useTitle("Home")
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <AppLayout>
      <ModalBulkAdd 
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      />
      <Container>
        <Spacer direction="vertical" size="large">
          <Text 
            type="Semibold"
            size="Big"
          >
            Latest Anime
          </Text>
          <AnimeList />
        </Spacer>
        <Spacer direction="vertical" size="large">
          <TextContainer>
            <Text 
              type="Semibold"
              size="Big"
            >
              Collection History
            </Text>
            <IconButton onClick={() => setModalVisible(true)}>
              <Popover trigger="hover" content="Add anime to your collection">
                <PlusIcon />
              </Popover>
            </IconButton>
          </TextContainer>
          <HistoryList />
        </Spacer>
      </Container>
    </AppLayout>
  )
}

export default Home