import styled from "@emotion/styled"
import { Modal as AntdModal } from "antd"
import CloseIcon from "../CloseIcon"

const StyledModal = styled(AntdModal)`
  & .ant-modal-content, & .ant-modal-header {
    background-color: ${({ theme }) => theme.color.secondary};
  } 
  & .ant-modal-header {
    border-bottom: 1px solid ${({ theme }) => theme.color.secondary};
  }
`

const Modal = (props) => <StyledModal closeIcon={<CloseIcon />} {...props} />

export default Modal