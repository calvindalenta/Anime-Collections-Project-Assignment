import { Switch } from "antd"
import { useContext } from "react"
import { DarkModeContext } from "context/DarkModeProvider"
import styled from "@emotion/styled"

const StyledSwitch = styled(Switch)`
  &.ant-switch-checked {
    background-color: ${({ theme }) => theme.color.primary}
  } 
`

const SwitchTheme = (props) => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)

  return (
    <StyledSwitch 
      checked={darkMode}
      checkedChildren="Dark" 
      unCheckedChildren="Light" 
      onChange={(b) => toggleDarkMode()}
      {...props}
    />
  )
}

export default SwitchTheme