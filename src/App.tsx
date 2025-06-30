import React from 'react'
import TopBar from './components/topbar'
import ServerList from './components/serverlist'
import MyServer from './components/myserver/myserver'

function App() {
  return (
    <div className = "h-screen bg-disc1 flex flex-col">
      <TopBar/>
      <div className="flex flex-row flex-1">
        <ServerList/>
        <MyServer/>
      </div>
    </div>
  )
}
export default App
