import styled from "@emotion/styled";
import { Button as AntdButton } from "antd";

const Button = styled(AntdButton)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.text.secondary};
  border: none;
  &:not([disabled]):focus, &:not([disabled]):hover {
    background-color: ${({ theme }) => theme.color.primaryShade} !important;
    color: ${({ theme }) => theme.text.secondary};
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.color.tertiary} !important;
    color: ${({ theme }) => theme.text.primary};
  }
`

export default Button