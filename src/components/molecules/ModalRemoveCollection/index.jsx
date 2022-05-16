import { Modal, Space } from "antd"
import styled from "@emotion/styled"
import Button from "components/atoms/Button"
import Text from "components/atoms/Text"
import useCollection from "hooks/useCollection"

const Spacer = styled(Space)`
  width: 100%;
`

const ButtonRight = styled.div`
  display: flex;
  justify-content: end;
  gap: 1rem;
`

const ModalRemoveAnime = ({ collection, visible, onRequestClose }) => {
  const { removeCollection } = useCollection()[2]

  return (
    <Modal
      width={400}
      footer={null}
      destroyOnClose
      visible={visible}
      onCancel={onRequestClose}
      title={<p style={{ textAlign: "center" }}>Remove Collection</p>}
    >
      <Spacer direction="vertical" size="large">
        <p style={{ textAlign: "center" }}>
          Are you sure you want to remove <Text type="Semibold">{collection}</Text>?
        </p>
        <ButtonRight>
          <Button 
            onClick={() => {
              removeCollection({ name: collection })
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