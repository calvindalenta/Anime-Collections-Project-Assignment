import { Modal, Space } from "antd"
import styled from "@emotion/styled"
import Button from "components/atoms/Button"
import InputCollection from "components/molecules/InputCollection"
import { useState } from "react"
import useCollection from "hooks/useCollection"

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
      onCancel={onRequestClose}
      title={<p style={{ textAlign: "center" }}>Edit Collection</p>}
    >
      <Spacer direction="vertical" size="large">
        <InputCollection initValue={collection} onChange={(d) => setData(d)} />
        <ButtonRight>
          <Button
            disabled={!data.value || data.error}
            onClick={() => {
              editCollection({ before: collection, after: data.value })
              onRequestClose()
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