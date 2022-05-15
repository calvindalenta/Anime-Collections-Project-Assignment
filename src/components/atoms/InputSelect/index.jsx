import styled from "@emotion/styled"
import { Select as AntdSelect } from "antd"

const StyledSelect = styled(AntdSelect)`
  width: 100%;
  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-color: ${({ theme }) => theme.color.primary} !important;
    box-shadow: none;
  }
  & .ant-select-selector:hover {
    border-color: ${({ theme }) => theme.color.primary} !important;
  }
`

const InputSelect = (props) => <StyledSelect {...props} />

export default InputSelect