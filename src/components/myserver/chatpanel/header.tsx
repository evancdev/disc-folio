import React from 'react'
import { Hash } from 'lucide-react'
import Member from '../../icons/member'
import Pin from '../../icons/pin'
import SearchBar from './searchbar'


const HeaderBar: React.FC = ({currChannel}) => {
  return (
    <div className="flex h-bar border-b border-bcolor items-center pl-5 pr-3.5 gap-2 relative">
      <Hash className="text-gtext w-5 h-5"/>{currChannel}
      <div className="flex items-center gap-5.5 ml-auto">
        <Pin className="icon"/>
        <Member className="icon"/>
        <SearchBar/>
      </div>
    </div>
  )
}
export default HeaderBar