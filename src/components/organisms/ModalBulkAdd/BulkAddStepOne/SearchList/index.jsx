import { Empty, Skeleton, Space, Tooltip } from "antd";
import styled from "@emotion/styled";
import AnimeItem from "components/molecules/AnimeItem";
import Error from "components/atoms/Error";

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
      {error && 
        <Error>
          <Empty description={error.message ? error.message : "Something went wrong"} image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </Error>
      }
      {!loading && !error && (!data || data.length < 1) &&
        <Error>
          <Empty 
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="Search any anime"
          />
        </Error>
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