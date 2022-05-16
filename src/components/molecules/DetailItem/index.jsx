import styled from "@emotion/styled"
import Text from "components/atoms/Text"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const DetailItem = ({ title, desc }) => {
  return (
    <Container>
      <Text type="Bold">{title}</Text>
      <Text>{desc}</Text>
    </Container>
  )
}

export default DetailItem