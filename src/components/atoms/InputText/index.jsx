import styled from "@emotion/styled"
import { Input as AntdInput } from "antd"

const StyledInput = styled(AntdInput)`
  &:focus {
    border-color: ${({ theme }) => theme.color.primary} !important;
    box-shadow: none;
  }
`

const InputText = (props) => <StyledInput {...props} />

export default InputText