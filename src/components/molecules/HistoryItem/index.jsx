import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Text from "components/atoms/Text";
import { getAnimeDetailRoute, getCollectionDetailRoute } from "utils/route";

const Container = styled.div`
  padding: 0.3rem;
  & p {
    margin: 0;
  }
`

const HistoryItem = ({ action, anime, collection }) => {
  let text = "Unknown Action"

  switch (action) {
    case "add-anime":
      text = (
      <Text>
        <span>Added </span> 
        <Link to={getAnimeDetailRoute(anime.id)}>
          <Text type="Semibold">{anime.title}</Text>
        </Link>
        <span> to </span> 
        <Link to={getCollectionDetailRoute(collection)}>
          <Text type="Semibold">{collection}</Text>
        </Link>
      </Text>
      )
      break;
    case "remove-anime":
      text = (
      <Text>
        <span>Removed </span> 
        <Link to={getAnimeDetailRoute(anime.id)}>
          <Text type="Semibold">{anime.title}</Text>
        </Link>
        <span> to </span> 
        <Link to={getCollectionDetailRoute(collection)}>
          <Text type="Semibold">{collection}</Text>
        </Link>
      </Text>
      )
      break;
    case "add-collection":
      text = (
      <Text>
        <span>Added </span> 
        <Link to={getCollectionDetailRoute(collection)}>
          <Text type="Semibold">{collection}</Text>
        </Link>
      </Text>
      )
      break;
    case "remove-collection":
      text = (
      <Text>
        <span>Removed </span> 
        <Link to={getCollectionDetailRoute(collection)}>
          <Text type="Semibold">{collection}</Text>
        </Link>
      </Text>
      )
      break
    case "edit-collection":
      text = (
      <Text>
        <span>Renamed </span> 
        <Text type="Semibold">{collection[0]}</Text>
        <span> to </span>
        <Link to={getCollectionDetailRoute(collection[1])}>
          <Text type="Semibold">{collection[1]}</Text>
        </Link>
      </Text>
      )
      break
    default:
      break;
  }
  return (
    <Container>
      {text}
    </Container>
  )
}

export default HistoryItem