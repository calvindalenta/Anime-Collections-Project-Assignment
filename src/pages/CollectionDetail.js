import { useState } from "react"
import styled from "@emotion/styled"
import { Empty, Popover, Space } from "antd"
import { useNavigate, useParams } from "react-router-dom"
import Text from "components/atoms/Text"
import AppLayout from "components/organisms/Layout"
import ModalEditCollection from "components/organisms/ModalEditCollection"
import IconButton from "components/atoms/IconButton"
import EditIcon from "components/atoms/EditIcon"
import useTitle from "hooks/useTitle"
import useCollection from "hooks/useCollection"
import { getCollectionDetailRoute } from "utils/route"
import CompactAnimeList from "components/organisms/CompactAnimeList"
import Error from "components/atoms/Error"
import ModalRemoveAnime from "components/molecules/ModalRemoveAnime"

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

const CollectionDetail = (props) => {
  const { name } = useParams()
  const navigate = useNavigate()
  const [info] = useCollection()

  useTitle(info.collections[name] ? name : "Collection")

  const [editModal, setEditModal] = useState(false)
  const [removeModal, setRemoveModal] = useState(false)
  const [selectedAnime, setSelectedAnime] = useState()

  const collection = info.collections[name]

  const getTitle = (anime) => {
    if (!anime) return null
    const { title } = anime
    return title.romaji || title.english || title.native
  }

  return (
    <AppLayout>
      <ModalEditCollection 
        visible={editModal}
        collection={name}
        onRequestClose={(v) => {
          setEditModal(false)
          if (!v) return
          navigate(getCollectionDetailRoute(v))
        }}
      />
      <ModalRemoveAnime 
        visible={removeModal}
        collection={name}
        anime={selectedAnime}
        title={getTitle(selectedAnime)}
        onRequestClose={() => {
          setSelectedAnime()
          setRemoveModal(false)
        }}
      />
      {!collection &&
      <Error>
        <Empty description="This collection does not exist" image={Empty.PRESENTED_IMAGE_SIMPLE} />
      </Error>
      }
      {collection &&
      <Spacer direction="vertical" size="large">
        <TextContainer>
          <Text 
            type="Semibold"
            size="Big"
          >
            {name}
          </Text>
          <IconButton onClick={() => setEditModal(true)}>
            <Popover trigger="hover" content="Edit collection">
              <EditIcon />
            </Popover>
          </IconButton>
        </TextContainer>
        <CompactAnimeList 
          data={collection}
          onDelete={(v) => {
            setSelectedAnime(v)
            setRemoveModal(true)
          }}
        />
      </Spacer>
      }
    </AppLayout>
  )
}

export default CollectionDetail