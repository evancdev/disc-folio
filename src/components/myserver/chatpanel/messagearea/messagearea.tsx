import React, { useEffect, useRef, useState } from 'react'
import {getContent} from "../../../data/supabase"
import Welcome from './welcome'
import UserMsg from'./usermsg'


const MessageArea: React.FC = ({currChannel}) => {
  return (
    <div className="flex flex-col px-4">
      <Welcome currChannel = {currChannel}/>
      <UserMsg currChannel = {currChannel}></UserMsg>
    </div>
  )
}

export default MessageArea