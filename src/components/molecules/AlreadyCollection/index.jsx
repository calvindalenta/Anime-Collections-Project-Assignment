import styled from "@emotion/styled"
import Text from "components/atoms/Text"
import useCollection from "hooks/useCollection"
import { Link } from "react-router-dom"
import { getCollectionDetailRoute } from "utils/route"

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
`

const PrimaryLink = styled(Link)`
  color: ${({ theme }) => theme.color.primary};
`

const AlreadyCollection = ({ anime_id }) => {
  const [info] = useCollection()
  const collections = []

  for(const [key, value] of Object.entries(info.collections)){
    if (value.find(a => String(a.id) === String(anime_id))){
      collections.push(key)
    }
  }

  if (collections.length < 1) return null

  return (
    <div>
      <Text style={{ margin: 0 }}>This anime is already in these collections:</Text>
      <LinkContainer>
        {collections.map(c => (
          <PrimaryLink key={c} to={getCollectionDetailRoute(c)}>
            <li>{c}</li>
          </PrimaryLink>
        ))}
      </LinkContainer>
    </div>
  )

}

export default AlreadyCollection