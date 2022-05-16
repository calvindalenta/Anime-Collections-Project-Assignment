import { useState } from "react"
import { Space } from "antd"
import styled from "@emotion/styled"
import useCollection from "hooks/useCollection"
import SelectCollection, { COLLECTION_TYPE } from "components/molecules/SelectCollection"
import Button from "components/atoms/Button"
import Text from "components/atoms/Text"
import CloseIcon from "components/atoms/CloseIcon"
import Modal from "components/atoms/Modal"

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
  const { createCollection, addAnime } = useCollection()[2]

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
      closeIcon={<CloseIcon />}
      title={<p style={{ textAlign: "center", margin: 0 }}><Text>Add {title} to Your Collection</Text></p>}
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