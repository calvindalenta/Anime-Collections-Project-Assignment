export const COLLECTION_KEY = "collections"
export const HISTORY_KEY = "histories"

let subscribers = []

export function subscribe(callbackFn){
  subscribers.push(callbackFn)
}

export function unsubscribe(callbackFn){
  subscribers = subscribers.filter(f => f !== callbackFn)
}

export function fetchCollection(){
  const collections = localStorage.getItem(COLLECTION_KEY)
  const histories = localStorage.getItem(HISTORY_KEY)
  return { collections: JSON.parse(collections) || {}, histories: JSON.parse(histories) || [] }
}

export function saveCollection({ collections, histories }){
  localStorage.setItem(COLLECTION_KEY, JSON.stringify(collections))
  localStorage.setItem(HISTORY_KEY, JSON.stringify(histories))
  for(let fn of subscribers){
    fn()
  }
}