import { useState } from "react"
import { Select, Space } from "antd"
import styled from "@emotion/styled"
import useCollection from "hooks/useCollection"
import { hasSpecialChar } from "utils/validate"
import InputSelect from "components/atoms/InputSelect"
import InputText from "components/atoms/InputText"

const { Option } = Select 

const Spacer = styled(Space)`
  width: 100%;
`

export const COLLECTION_TYPE = {
  EXISTING: "existing",
  NEW: "new"
}

const SelectCollection = ({ onChange }) => {
  const [type, setType] = useState(COLLECTION_TYPE.EXISTING)
  const [error, setError] = useState()
  const [info] = useCollection()

  return (
    <Spacer direction="vertical" size="large">
      <InputSelect 
        value={type} 
        onChange={(v) => {
          onChange({ type: v })
          setType(v)
          setError()
        }}
      >
        <Option value={COLLECTION_TYPE.EXISTING}>Existing Collection</Option>
        <Option value={COLLECTION_TYPE.NEW}>New Collection</Option>
      </InputSelect>
      {type === COLLECTION_TYPE.NEW &&
      <div>
        <InputText 
          placeholder="Type collection name" 
          onChange={(e) => {
            const v = e.target.value
            if (hasSpecialChar(v)){
              setError("Collection name shouldn't include any special characters")
              onChange({ error })
            } else if (Object.keys(info.collections).includes(v)){
              setError("There's already a collection with the same name")
              onChange({ error })
            } else {
              setError()
              onChange({ type, value: e.target.value, error })
            }
          }}
        />
        {error}
      </div>
      }
      {type === COLLECTION_TYPE.EXISTING &&
        <InputSelect 
          placeholder="Choose collection" 
          onChange={(v) => onChange({ type, value: v })} 
          options={Object.keys(info.collections).map(c => ({ label: c, value: c }))}
        />
      }
    </Spacer>
  )
}

export default SelectCollection