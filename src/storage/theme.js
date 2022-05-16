const THEME_KEY = "dark-mode"

export function fetchTheme(){
  return localStorage.getItem(THEME_KEY) === "false" ? false : true
}

export function saveTheme(darkMode){
  localStorage.setItem(THEME_KEY, darkMode)
}