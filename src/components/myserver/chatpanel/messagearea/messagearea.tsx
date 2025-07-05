import React, { useEffect, useRef, useState } from 'react'
import {getContent} from "../../../data/supabase"
import { Hash } from 'lucide-react'
import Welcome from './welcome'

const MessageArea: React.FC<{ currChannel: string }> = ({currChannel}) => {
  return (
    <div className="flex flex-col px-4">
      <Welcome channelName = {currChannel.name}/>
      
    </div>
  )
}

export default MessageArea