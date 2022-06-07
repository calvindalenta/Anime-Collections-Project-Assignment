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

const CompactAnimeItem = ({ imgSrc, title, onClick }) => {
  return (
    <Container onClick={onClick}>
      <ImageRenderer src={imgSrc} alt={title}/>
      <Content direction="vertical" size="small">
        <Text size="Normal" type="Semibold">{title}</Text>
      </Content>
    </Container>
  )
}

export default CompactAnimeItem