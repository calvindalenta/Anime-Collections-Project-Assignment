import { Empty, Skeleton, Space } from "antd";
import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import Pagination from "components/atoms/Pagination";
import AnimeItem from "components/molecules/AnimeItem";
import GET_ANIME_QUERY from "graphql/queries/getAnime";
import { Link, useSearchParams } from "react-router-dom";
import { getAnimeDetailRoute } from "utils/route";
import Error from "components/atoms/Error";

const ListContainer = styled(Space)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.tertiary};
  padding: 1rem;
`

const Container = styled(Space)`
  width: 100%;
`

const FlexMiddle = styled.div`
  display: flex;
  justify-content: center;
`

const PER_PAGE = 10
const PAGE_KEY = "page"

const AnimeList = (props) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const getCurPage = () => Number(searchParams.get(PAGE_KEY)) || 1

  const { 
    loading, 
    error, 
    data, 
    refetch 
  } = useQuery(GET_ANIME_QUERY, { variables: { page: getCurPage(), perPage: PER_PAGE }, notifyOnNetworkStatusChange: true })

  return (
    <Container direction="vertical" size="middle">
      <ListContainer direction="vertical" size="small">
        {loading && <Skeleton />}
        {error && 
          <Error>
            <Empty description={error.message ? error.message : "Something went wrong"} image={Empty.PRESENTED_IMAGE_SIMPLE} />
          </Error>
        }
        {data && data.Page.media.map(m => (
          <Link to={getAnimeDetailRoute(m.id)} key={m.id}>
            <AnimeItem 
              key={m.id}
              imgSrc={m.coverImage.medium}
              episodes={m.episodes}
              title={m.title.english || m.title.romaji || m.title.native}
              genres={m.genres}
              status={m.status}
            />
          </Link>
        ))
        }
      </ListContainer>
      {data &&
        <FlexMiddle>
          <Pagination 
            showSizeChanger={false}
            pageSize={PER_PAGE}
            current={getCurPage()} 
            total={data.Page.pageInfo.total}
            onChange={(page) => {
              setSearchParams({ [PAGE_KEY]: page })
              refetch({ page, perPage: PER_PAGE })
            }} 
          />
        </FlexMiddle>
      }
    </Container>
  )
}

export default AnimeList