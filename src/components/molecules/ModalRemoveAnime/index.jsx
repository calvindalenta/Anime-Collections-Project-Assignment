import { Space } from "antd"
import styled from "@emotion/styled"
import Button from "components/atoms/Button"
import Text from "components/atoms/Text"
import useCollection from "hooks/useCollection"
import Modal from "components/atoms/Modal"

const Spacer = styled(Space)`
  width: 100%;
`

const ButtonRight = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
`

const ModalRemoveAnime = ({ anime, collection, title, visible, onRequestClose }) => {
  const { removeAnime } = useCollection()[2]

  return (
    <Modal
      width={400}
      footer={null}
      destroyOnClose
      visible={visible}
      onCancel={onRequestClose}
      title={<Text><p style={{ textAlign: "center" }}>Remove Anime</p></Text>}
    >
      <Spacer direction="vertical" size="large">
        <p style={{ textAlign: "center" }}>
          <Text>Are you sure you want to remove <Text type="Semibold">{title}</Text>?</Text>
        </p>
        <ButtonRight>
          <Button 
            onClick={() => {
              removeAnime({ anime, collection })
              onRequestClose()
            }}
          >
            Yes
          </Button>
        </ButtonRight>
      </Spacer>
    </Modal>
  )
}

export default ModalRemoveAnime