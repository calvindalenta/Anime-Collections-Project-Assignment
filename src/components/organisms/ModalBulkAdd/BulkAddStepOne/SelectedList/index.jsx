import { Collapse, Space, Tooltip } from "antd";
import styled from "@emotion/styled";
import AnimeItem from "components/molecules/AnimeItem";

const ListContainer = styled(Space)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.tertiary};
  padding: 1rem;
  max-height: 50vh;
  overflow: auto;
`

const CollapseStyled = styled(Collapse)`
  & .ant-collapse-header {
    padding: 0.3rem 1rem !important;
  }
`

const SelectedList = (props) => {
  const { data, onSelect } = props
  
  return (
    <CollapseStyled expandIconPosition="right">
      <Collapse.Panel header={`Selected: ${data ? data.length : 0}`} key="1">
        <ListContainer direction="vertical" size="small">
          {data && data.map(m => (
            <Tooltip key={m.id} title="Click to remove">
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
      </Collapse.Panel>
    </CollapseStyled>
  )
}

export default SelectedList