import styled from "@emotion/styled"

const sizeMap = {
  Small: "0.8rem",
  Normal: "1rem",
  Big: "1.5rem",
  Header: "2rem"
}

const typeMap = {
  Regular: "400",
  Medium: "500",
  Semibold: "600",
  Bold: "700"
}

const TextStyled = styled.span(({ type, size, primary, theme }) => ({
  fontSize: sizeMap[size] ? sizeMap[size] : sizeMap.Normal,
  fontWeight: typeMap[type] ? typeMap[type] : typeMap.Regular,
  color: theme.text.primary,
}))

const Text = (props) => <TextStyled {...props} />

export default Text