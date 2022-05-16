import { Empty, Space } from "antd";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { getAnimeDetailRoute } from "utils/route";
import CompactAnimeItem from "components/molecules/CompactAnimeItem";
import Error from "components/atoms/Error";
import IconButton from "components/atoms/IconButton";
import DeleteIcon from "components/atoms/TrashIcon";

const ListContainer = styled(Space)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.tertiary};
  padding: 1rem;
`

const Container = styled(Space)`
  width: 100%;
`

const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  
  & a {
    flex: 1;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & button {
    align-self: center;
  }
`

const CompactAnimeList = ({ data, onDelete }) => {
  if (!data || data.length < 1) return (
    <Container direction="vertical" size="middle">
      <Error>
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="This collection is empty" />
      </Error>
    </Container>
  )

  return (
    <Container direction="vertical" size="middle">
      <ListContainer direction="vertical" size="small">
        {data.map(m => (
          <CardContainer key={m.id}>
            <Link to={getAnimeDetailRoute(m.id)} key={m.id}>
              <CompactAnimeItem 
                key={m.id}
                imgSrc={m.coverImage.medium}
                title={m.title.english || m.title.romaji || m.title.native}
              />
            </Link>
            <IconButton onClick={() => onDelete(m)}>
              <DeleteIcon />
            </IconButton>
          </CardContainer>
        ))}
      </ListContainer>
    </Container>
  )
}

export default CompactAnimeList