import React from 'react'
import {getContent} from '../../../data/supabase'

const UserMsg: React.FC = (currChannel) =>{
  const content = getContent(currChannel.id)
  return(
    <div className='flex flex-col flex-1'></div>
  )
}

export default UserMsg