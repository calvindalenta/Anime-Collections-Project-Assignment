import styled from "@emotion/styled"
import { Input as AntdInput } from "antd"

const StyledInput = styled(AntdInput)`
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.text.primary} !important;

  &:focus {
    border-color: ${({ theme }) => theme.color.primary} !important;
    box-shadow: none;
  }
`

const InputText = (props) => <StyledInput {...props} />

export default InputText