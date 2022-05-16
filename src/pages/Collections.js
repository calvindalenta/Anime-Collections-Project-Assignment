import { Popover, Space } from "antd"
import styled from "@emotion/styled"
import Text from "components/atoms/Text"
import AppLayout from "components/organisms/Layout"
import useTitle from "hooks/useTitle"
import CollectionCardList from "components/organisms/CollectionCardList"
import ModalRemoveAnime from "components/molecules/ModalRemoveCollection"
import ModalAddCollection from "components/organisms/ModalAddCollection"
import ModalEditCollection from "components/organisms/ModalEditCollection"
import { useState } from "react"
import IconButton from "components/atoms/IconButton"
import PlusIcon from "components/atoms/PlusIcon"

const Spacer = styled(Space)`
  width: 100%;
  margin-bottom: 2rem;
`

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`

const Collections = (props) => {
  useTitle("My Anime Collections")

  const [selectedCollection, setSelectedCollection] = useState()
  const [removeModal, setRemoveModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [addModal, setAddModal] = useState(false)

  return (
    <AppLayout>
      <ModalRemoveAnime 
        visible={removeModal}
        collection={selectedCollection}
        onRequestClose={() => setRemoveModal(false)}
      />
      <ModalEditCollection 
        visible={editModal}
        collection={selectedCollection} 
        onRequestClose={() => setEditModal(false)}
      />
      <ModalAddCollection 
        visible={addModal}
        onRequestClose={() => setAddModal(false)}
      />
      <Spacer direction="vertical" size="large">
        <TextContainer>
          <Text 
            type="Semibold"
            size="Big"
          >
            My Anime Collections
          </Text>
          <IconButton onClick={() => setAddModal(true)}>
            <Popover trigger="hover" content="Add new collection">
              <PlusIcon />
            </Popover>
          </IconButton>
        </TextContainer>
        <CollectionCardList
          onDelete={(key) => {
            setSelectedCollection(key)
            setRemoveModal(true)
          }}
          onEdit={(key) => {
            setSelectedCollection(key)
            setEditModal(true)
          }}
        />
      </Spacer>
    </AppLayout>
  )
}

export default Collections