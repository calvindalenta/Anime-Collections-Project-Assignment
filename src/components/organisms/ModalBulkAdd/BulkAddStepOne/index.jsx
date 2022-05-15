import { Space } from "antd"
import { useState } from "react"
import styled from "@emotion/styled"
import { useLazyQuery } from "@apollo/client"
import InputText from "components/atoms/InputText"
import SEARCH_ANIME_QUERY from "graphql/queries/searchAnime"
import SearchList from "./SearchList"
import SelectedList from "./SelectedList"
import Button from "components/atoms/Button"

const Spacer = styled(Space)`
  width: 100%;
`

const ButtonRight = styled.div`
  display: flex;
  justify-content: end;
`

const BulkAddStepOne = ({ initValue, goNext }) => {
  const [search, setSearch] = useState()
  const [selected, setSelected] = useState(initValue || [])

  const [
    searchAnime, 
    { loading, error, data }
  ] = useLazyQuery(SEARCH_ANIME_QUERY)

  const addAnime = (anime) => {
    setSelected(prev => {
      const newPrev = [...prev]
      if (!newPrev.find(n => n.id === anime.id)){
        newPrev.push(anime)
      }
      return newPrev
    })
  }

  const removeAnime = (anime) => {
    setSelected(prev => {
      const newPrev = [...prev]
      return newPrev.filter(n => n.id !== anime.id)
    })
  }

  return (
    <Spacer direction="vertical" size="large">
      <InputText 
        value={search}
        loading={loading}
        onChange={(e) => setSearch(e.target.value)}
        onPressEnter={(e) => search && searchAnime({ variables: { search }})}
        placeholder="Search any anime..." 
      />
      <SearchList 
        loading={loading}
        error={error}
        data={data}
        onSelect={addAnime}
      />
      <SelectedList 
        data={selected}
        onSelect={removeAnime}
      />
      <ButtonRight>
        <Button
          disabled={selected.length < 1}
          onClick={() => goNext(selected)}
        >
          Next
        </Button>
      </ButtonRight>
    </Spacer>
  )
}

export default BulkAddStepOne