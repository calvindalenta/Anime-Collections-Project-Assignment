import styled from "@emotion/styled"
import { Skeleton } from "antd"
import useIntersection from "hooks/useIntersection"
import { useRef, useState } from "react"

const Container = styled.div`
  min-width: 7rem;

  img {
    height: 100%;
    width: 100%;
  }  
`

export default function ImageRenderer({ src, ...imgProps }){
  const [inView, setInView] = useState(false)
  const imgRef = useRef()

  useIntersection(imgRef, () => { setInView(true) })

  return (
    <Container
      ref={imgRef}
    >
      {!inView && <Skeleton.Image />}
      {inView && <img src={src} alt="" {...imgProps} /> }
    </Container>
  )
}