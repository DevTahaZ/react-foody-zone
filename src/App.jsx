import React from "react"
import { useState } from 'react'
import Header from "./components/header/Header"
import SearchResult from "./components/searchResult/SearchResult"


function App() {

  const[search, setSearch] = useState("")

  

  return (
    <>
      <Header SetSearch={setSearch}/>
      <SearchResult PassSearch={search}/>
    </>
  )
}

export default App