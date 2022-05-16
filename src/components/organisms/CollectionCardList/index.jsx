import { Empty } from "antd"
import styled from "@emotion/styled"
import useCollection from "hooks/useCollection"
import CollectionCard from "components/molecules/CollectionCard"
import { useNavigate } from "react-router-dom"
import { getCollectionDetailRoute } from "utils/route"
import Error from "components/atoms/Error"

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.tertiary};
  box-shadow: 5px 5px ${({ theme }) => theme.color.tertiaryShade};
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-items: start;
  justify-items: center;

  @media screen and (min-width: 426px){
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`

const CollectionCardList = ({ onDelete, onEdit }) => {
  const [info] = useCollection()
  const navigate = useNavigate()

  const collections = Object.entries(info.collections)

  if (collections.length < 1) return (
    <Error>
      <Empty description="You have no collections" image={Empty.PRESENTED_IMAGE_SIMPLE} />
    </Error>
  )

  return (
    <Container>
      {collections.map(([key, v]) => {
        const imgSrc = v.length > 0 ? v[0].coverImage.large : "/DefaultCollection.webp"
        return (
          <CollectionCard 
            key={key} 
            name={key} 
            imgSrc={imgSrc}
            onClickCard={() => navigate(getCollectionDetailRoute(key))}
            onClickDelete={() => onDelete(key)}
            onClickEdit={() => onEdit(key)}
          />
        )
      })}
    </Container>
  )
}

export default CollectionCardList