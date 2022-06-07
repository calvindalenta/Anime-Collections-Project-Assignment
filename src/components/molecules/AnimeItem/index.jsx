import { Space } from "antd"
import styled from "@emotion/styled"
import Text from "components/atoms/Text"
import ImageRenderer from "components/atoms/ImageRenderer"

const Container = styled.div`
  display: flex;
  align-items: center;
  max-height: 15rem;
  & img {
    width: 4rem;
    height: 6rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.tertiaryShade}
  }

  @media screen and (min-width: 769px){
    max-height: 10rem;
    cursor: pointer;
    & img {
      width: 7rem;
      height: 100%;
    }
  }
`

const Content = styled(Space)`
  width: 100%;
  padding: 1rem;
  gap: 0 !important;
  overflow: hidden;
  & p { 
    margin: 0; 
    text-overflow: ellipsis;
  }
`

const statusMap = {
  FINISHED: "Finished",
  RELEASING: "Currently Releasing",
  NOT_YET_RELEASED: "Not Yet Released",
  CANCELLED: "Cancelled",
  HIATUS: "Hiatus"
}

const AnimeItem = ({ imgSrc, title, episodes, status, genres, onClick }) => {
  return (
    <Container onClick={onClick}>
      <ImageRenderer src={imgSrc} alt={title}/>
      <Content direction="vertical" size="small">
        <Text size="Normal" type="Semibold">{title}</Text>
        <Text>Episode: {episodes || 0}</Text>
        <Text>Status: {statusMap[status]}</Text>
        <Text>Genres: {genres && genres.slice(0, 5).join(", ")}{ genres && genres.length > 5 && ", and more..."}</Text>
      </Content>
    </Container>
  )
}

export default AnimeItem