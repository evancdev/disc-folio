import React from 'react'

const ChatBox: React.FC = ({currChannel}) =>
{
  return (
    <div className="flex flex-col flex-1">
      <p>Current Channel: {currChannel}</p>
    </div>
  )
}

export default ChatBox