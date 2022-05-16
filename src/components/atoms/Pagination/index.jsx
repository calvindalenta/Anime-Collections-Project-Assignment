import styled from "@emotion/styled";
import { Pagination as AntdPagination } from "antd";

const PaginationStyled = styled(AntdPagination)`
  & a {
    color: ${({ theme }) => theme.text.primary}
  }
  & .ant-pagination-prev, & .ant-pagination-next {
    display: none;
  }
  & .ant-pagination-item {
    border: none;
    background-color: ${({ theme }) => theme.color.tertiary}
  }
  & .ant-pagination-item-ellipsis {
    color: ${({ theme }) => theme.text.primary} !important;
  }
  & .anticon-double-right path {
    fill: ${({ theme }) => theme.text.primary} !important;
  }
  & .ant-pagination-item-active {
    background-color: ${({ theme }) => theme.color.primary};
    & a {
      color: ${({ theme }) => theme.text.secondary}
    }
  }
  & .ant-pagination-item-active:hover {
    border: 1px solid ${({ theme }) => theme.color.tertiary};
  }
`

// const Pagination = (props) => <PaginationStyled {...props} itemRender={(_, type, oe) => type === "page" ? oe : null}/>
const Pagination = (props) => <PaginationStyled {...props} />

export default Pagination