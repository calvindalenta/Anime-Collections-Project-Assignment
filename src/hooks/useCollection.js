import { useEffect, useCallback, useState } from "react";
import { fetchCollection, saveCollection, subscribe, unsubscribe } from "storage/collections";

export default function useCollection(){
  const [info, setInfo] = useState(fetchCollection())

  useEffect(() => {
    const listener = () => setInfo(fetchCollection())
    subscribe(listener)
    return () => unsubscribe(listener)
  }, [setInfo])

  const addAnime = useCallback(({ anime = [], collection }) => {
    const newHistory = anime.map(a => ({
      timestamp: Date.now(),
      action: "add-anime",
      anime: { id: a.id, title: a.title.romaji || a.title.english || a.title.native },
      collection
    }))
    const curCol = [...(info.collections[collection] || [])]
    anime.forEach(a => {
      if (!curCol.find(c => c.id === a.id)){
        curCol.push(a)
      }
    })
    const copyCol = {...info.collections}
    copyCol[collection] = curCol
    saveCollection({ histories: [...newHistory, ...info.histories], collections: copyCol })
  }, [info])

  const removeAnime = useCallback(({ anime, collection }) => {
    const newHistory = {
      timestamp: Date.now(),
      action: "remove-anime",
      anime: { id: anime.id, title: anime.title.romaji || anime.title.english || anime.title.native },
      collection
    }
    const copyCol = {...info.collections}
    copyCol[collection] = copyCol[collection].filter(a => String(a.id) !== String(anime.id))
    saveCollection({ histories: [newHistory, ...info.histories], collections: copyCol })
  }, [info])

  const createCollection = useCallback(({ name }) => {
    const newHistory = {
      timestamp: Date.now(),
      action: "add-collection",
      collection: name
    }
    const copyCol = {...info.collections}
    copyCol[name] = []
    saveCollection({ histories: [newHistory, ...info.histories], collections: copyCol })
  }, [info])

  const removeCollection = useCallback(({ name }) => {
    const newHistory = {
      timestamp: Date.now(),
      action: "remove-collection",
      collection: name
    }
    const copyCol = {...info.collections}
    delete copyCol[name]
    saveCollection({ histories: [newHistory, ...info.histories], collections: copyCol })
  }, [info])

  const editCollection = useCallback(({ before, after }) => {
    const newHistory = {
      timestamp: Date.now(),
      action: "edit-collection",
      collection: [before, after]
    }
    const copyCol = {...info.collections}
    copyCol[after] = [...copyCol[before]]
    delete copyCol[before]
    saveCollection({ histories: [newHistory, ...info.histories], collections: copyCol })
  }, [info])

  return [info, setInfo, { addAnime, removeAnime, createCollection, removeCollection, editCollection }]
}