import { useEffect } from "react"

const suffix = ` - ${process.env.REACT_APP_TITLE}`

export default function useTitle(prefix) {
  useEffect(() => {
    const prevTitle = document.title
    document.title = prefix + suffix
    return () => {
      document.title = prevTitle
    }
  })
}