import React, { useEffect, useRef, useState } from 'react'
import {getContent} from "../../../data/supabase"
import { Hash } from 'lucide-react'
import Welcome from './welcome'

const MessageArea: React.FC<{ currChannel: string }> = ({currChannel}) => {
  const [contents, setContents] = useState<any[] | null>(null)
  const bottomRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    getContent(currChannel).then(setContents)
  }, [currChannel])


  return (
    <div className="flex flex-col h-61 border-b border-bcolor px-3">
      <Welcome channelName = {currChannel.name}/>
    </div>
  )
}

export default MessageArea