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
      <p>
        <span>Added </span> 
        <Link to={getAnimeDetailRoute(anime.id)}>
          <Text type="Semibold">{anime.title}</Text>
        </Link>
        <span> to </span> 
        <Link to={getCollectionDetailRoute(collection)}>
          <Text type="Semibold">{collection}</Text>
        </Link>
      </p>
      )
      break;
    case "remove-anime":
      text = (
      <p>
        <span>Removed </span> 
        <Link to={getAnimeDetailRoute(anime.id)}>
          <Text type="Semibold">{anime.title}</Text>
        </Link>
        <span> to </span> 
        <Link to={getCollectionDetailRoute(collection)}>
          <Text type="Semibold">{collection}</Text>
        </Link>
      </p>
      )
      break;
    case "add-collection":
      text = (
      <p>
        <span>Added </span> 
        <Link to={getCollectionDetailRoute(collection)}>
          <Text type="Semibold">{collection}</Text>
        </Link>
      </p>
      )
      break;
    case "remove-collection":
      text = (
      <p>
        <span>Removed </span> 
        <Link to={getCollectionDetailRoute(collection)}>
          <Text type="Semibold">{collection}</Text>
        </Link>
      </p>
      )
      break
    case "edit-collection":
      text = (
      <p>
        <span>Renamed </span> 
        <Text type="Semibold">{collection[0]}</Text>
        <span> to </span>
        <Link to={getCollectionDetailRoute(collection[1])}>
          <Text type="Semibold">{collection[1]}</Text>
        </Link>
      </p>
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