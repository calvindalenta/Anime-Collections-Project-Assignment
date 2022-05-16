import { Empty, Space } from "antd";
import styled from "@emotion/styled";
import HistoryItem from "components/molecules/HistoryItem";
import useCollection from "hooks/useCollection";
import Error from "components/atoms/Error";

const Container = styled(Space)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.tertiary};
  padding: 0.5rem;
  max-height: 100vh;
  overflow: auto;
  & > div {
    border-bottom: 1px solid black;
  }
  & > div:last-child {
    border-bottom: none;
  }
`

const HistoryList = (props) => {
  const [info] = useCollection()

  return (
    <Container direction="vertical" size="small">
      {info.histories.length < 1 &&
        <Error>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No History"/>
        </Error>
      }
      {info.histories &&
        info.histories.map((h, idx) => (
          <HistoryItem 
            key={idx}
            {...h}
          />
        ))
      }
    </Container>
  )
}

export default HistoryList