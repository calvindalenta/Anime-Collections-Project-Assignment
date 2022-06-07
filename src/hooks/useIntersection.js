import { useEffect } from "react";

function handleObserverCallback(callback, entries, observer){
  for(const entry of entries){
    const target = entry.target
    if (entry.isIntersecting){
      observer.unobserve(target)
      callback()
    }
  }
}

function createObserver(callback){
  const observer = new IntersectionObserver(
    (...args) => handleObserverCallback(callback, ...args), 
    {
      rootMargin: "0px",
      threshold: 1
    }
  )

  return observer
}

const useIntersection = (ref, callback) => {
  useEffect(() => {
    if (!ref || !callback) return
    if (!window.IntersectionObserver) {
      callback()
      return
    }

    const el = ref.current
    const observer = createObserver(callback)
    observer.observe(el)

    return () => {
      observer.unobserve(el)
    }
  }, [ref, callback])
} 

export default useIntersection