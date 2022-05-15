import { Empty, Skeleton, Space, Tooltip } from "antd";
import styled from "@emotion/styled";
import AnimeItem from "components/molecules/AnimeItem";

const ListContainer = styled(Space)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.tertiary};
  padding: 1rem;
  max-height: 50vh;
  overflow: auto;
`

const SearchList = (props) => {
  const { loading, error, data, onSelect } = props

  return (
    <ListContainer direction="vertical" size="small">
      {loading && <Skeleton />}
      {error && error.message}
      {!loading && !error && (!data || data.length < 1) &&
        <Empty 
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Search any anime"
        />
      }
      {data && data.Page.media.map(m => (
        <Tooltip key={m.id} title="Click to add">
          <div>
            <AnimeItem 
              key={m.id}
              imgSrc={m.coverImage.medium}
              episodes={m.episodes}
              title={m.title.english || m.title.romaji || m.title.native}
              genres={m.genres}
              status={m.status}
              onClick={() => onSelect(m)}
            />
          </div>
        </Tooltip>
      ))
      }
    </ListContainer>
  )
}

export default SearchList