import { Space } from "antd"
import { useState } from "react"
import styled from "@emotion/styled"
import Button from "components/atoms/Button"
import SelectCollection from "components/molecules/SelectCollection"

const Spacer = styled(Space)`
  width: 100%;
`

const ButtonRight = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
`

const BulkAddStepTwo = ({ initValue, goNext, goPrev }) => {
  const [collectionInfo, setCollectionInfo] = useState(initValue)

  return (
    <Spacer direction="vertical" size="large">
      <SelectCollection 
        onChange={setCollectionInfo}
      />
      <ButtonRight>
        <Button
          onClick={() => goPrev()}
        >
          Prev
        </Button>
        <Button
          disabled={!collectionInfo.value || collectionInfo.error}
          onClick={() => goNext(collectionInfo)}
        >
          Save
        </Button>
      </ButtonRight>
    </Spacer>
  )
}

export default BulkAddStepTwo