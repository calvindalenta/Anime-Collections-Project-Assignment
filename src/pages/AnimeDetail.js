import { useState } from "react"
import styled from "@emotion/styled"
import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { Empty, Skeleton, Space } from "antd"
import useTitle from "hooks/useTitle"
import Text from "components/atoms/Text"
import Error from "components/atoms/Error"
import Button from "components/atoms/Button"
import AppLayout from "components/organisms/Layout"
import ModalAddAnime from "components/organisms/ModalAddAnime"
import AnimeDetailInfo from "components/organisms/AnimeDetailInfo"
import AlreadyCollection from "components/molecules/AlreadyCollection"
import DETAIL_ANIME_QUERY from "graphql/queries/detailAnime"

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.tertiary};
  box-shadow: 5px 5px ${({ theme }) => theme.color.tertiaryShade};

  @media screen and (min-width: 426px){
    display: grid;
    grid-template-columns: 1fr 4fr;
  }
`

const Spacer = styled(Space)`
  width: 100%;
  margin-bottom: 2rem;
`

const LeftContainer = styled(Space)`
  width: 100%;
  padding: 1rem;

  & img {
    width: 100%;
  }
`

const RightContainer = styled.div`
  width: 100%;
  padding: 1rem;
`

const AnimeDetail = (props) => {
  const { anime_id } = useParams()
  const { loading, error, data } = useQuery(DETAIL_ANIME_QUERY, { variables: { id: anime_id } })
  const [modalVisible, setModalVisible] = useState(false)

  const getTitle = (data) => {
    if (!data) return null
    const { title } = data.Media
    return title.romaji || title.english || title.native 
  }

  useTitle(!data ? "Anime Detail" : getTitle(data))

  return (
    <AppLayout>
      {loading && <Skeleton />}
      {error && 
        <Error>
          <Empty description={error.message ? error.message : "Something went wrong"} image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </Error>
      }
      {data &&
      <>
        <ModalAddAnime
          visible={modalVisible}
          title={getTitle(data)}
          anime={data.Media}
          onRequestClose={() => setModalVisible(false)}
        />
        <Spacer direction="vertical" size="large">
          <Text 
            type="Semibold"
            size="Big"
          >
            {getTitle(data)}
          </Text>
          <Container>
            <LeftContainer direction="vertical">
              <img src={data.Media.coverImage.large} alt={data.Media.title.romaji}/>
              <Button
                onClick={() => setModalVisible(true)}
              >
                Add to Collection
              </Button>
              <AlreadyCollection anime_id={anime_id} />
            </LeftContainer>
            <RightContainer>
              <AnimeDetailInfo {...data.Media}/>
            </RightContainer>
          </Container>
        </Spacer>
      </>
      }
    </AppLayout>
  )
}

export default AnimeDetail