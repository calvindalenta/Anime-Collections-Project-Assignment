import { Space } from "antd"
import { useState } from "react"
import styled from "@emotion/styled"
import Button from "components/atoms/Button"
import InputCollection from "components/molecules/InputCollection"
import useCollection from "hooks/useCollection"
import Modal from "components/atoms/Modal"
import Text from "components/atoms/Text"

const Spacer = styled(Space)`
  width: 100%;
`

const ButtonRight = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
`

const ModalEditCollection = ({ collection, visible, onRequestClose }) => {
  const [data, setData] = useState({})
  const { editCollection } = useCollection()[2]

  return (
    <Modal
      width={400}
      footer={null}
      destroyOnClose
      visible={visible}
      onCancel={() => onRequestClose()}
      title={<Text><p style={{ textAlign: "center" }}>Edit Collection</p></Text>}
    >
      <Spacer direction="vertical" size="large">
        <InputCollection initValue={collection} onChange={(d) => setData(d)} />
        <ButtonRight>
          <Button
            disabled={!data.value || data.error}
            onClick={() => {
              editCollection({ before: collection, after: data.value })
              onRequestClose(data.value)
            }}
          >
            Submit
          </Button>
        </ButtonRight>
      </Spacer>
    </Modal>
  )
}

export default ModalEditCollection