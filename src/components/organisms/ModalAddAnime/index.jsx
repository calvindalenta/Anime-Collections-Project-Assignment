import { useState } from "react"
import { Modal, Space } from "antd"
import styled from "@emotion/styled"
import useCollection from "hooks/useCollection"
import SelectCollection, { COLLECTION_TYPE } from "components/molecules/SelectCollection"
import Button from "components/atoms/Button"

const Spacer = styled(Space)`
  width: 100%;
`

const ButtonRight = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
`

const ModalAddAnime = ({ anime, title, visible, onRequestClose }) => {
  const [collectionInfo, setCollectionInfo] = useState({})
  const [info, setInfo, { createCollection, addAnime }] = useCollection()

  const closeModal = () => {
    setCollectionInfo({})
    onRequestClose()
  }

  return (
    <Modal
      width={600}
      footer={null}
      destroyOnClose
      visible={visible}
      onCancel={closeModal}
      title={<p style={{ textAlign: "center" }}>Add {title} to Your Collection</p>}
    >
      <Spacer direction="vertical" size="large">
        <SelectCollection 
          onChange={setCollectionInfo}
        />
        <ButtonRight>
          <Button
            disabled={!collectionInfo.value || collectionInfo.error}
            onClick={(e) => {
              const { value, type } = collectionInfo
              if (type === COLLECTION_TYPE.NEW){
                createCollection({ name: value })
              }
              addAnime({ anime: [anime], collection: value })
              closeModal()
            }}
          >
            Save
          </Button>
        </ButtonRight>
      </Spacer>
    </Modal>
  )
}

export default ModalAddAnime