import { useState } from "react"
import { hasSpecialChar } from "utils/validate"
import useCollection from "hooks/useCollection"
import InputText from "components/atoms/InputText"

const InputCollection = ({ initValue, onChange }) => {
  const [info] = useCollection()
  const [error, setError] = useState()

  return (
    <div>
      <InputText 
        defaultValue={initValue}
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
            onChange({value: e.target.value, error })
          }
        }}
      />
      {error}
    </div>
  )
}

export default InputCollection