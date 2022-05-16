import styled from "@emotion/styled";
import { Pagination as AntdPagination } from "antd";

const PaginationStyled = styled(AntdPagination)`
  & .ant-pagination-prev, & .ant-pagination-next {
    display: none;
  }
  & .ant-pagination-item {
    border: none;
    background-color: ${({ theme }) => theme.color.tertiaryShade}
  }
  & .ant-pagination-item-active {
    background-color: ${({ theme }) => theme.color.primary};
  }
  & .ant-pagination-item-active:hover {
    border: 1px solid ${({ theme }) => theme.color.tertiary};
  }
  & a {
    color: ${({ theme }) => theme.text.secondary}
  }
`

// const Pagination = (props) => <PaginationStyled {...props} itemRender={(_, type, oe) => type === "page" ? oe : null}/>
const Pagination = (props) => <PaginationStyled {...props} />

export default Pagination