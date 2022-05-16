import { useState } from "react"
import { Select, Space } from "antd"
import styled from "@emotion/styled"
import useCollection from "hooks/useCollection"
import { hasSpecialChar } from "utils/validate"
import InputSelect from "components/atoms/InputSelect"
import InputText from "components/atoms/InputText"
import InputCollection from "../InputCollection"

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
  const [info] = useCollection()

  return (
    <Spacer direction="vertical" size="large">
      <InputSelect 
        value={type} 
        onChange={(v) => {
          onChange({ type: v })
          setType(v)
        }}
      >
        <Option value={COLLECTION_TYPE.EXISTING}>Existing Collection</Option>
        <Option value={COLLECTION_TYPE.NEW}>New Collection</Option>
      </InputSelect>
      {type === COLLECTION_TYPE.NEW &&
        <InputCollection onChange={({ value, error }) => onChange({ type, value, error })} />
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