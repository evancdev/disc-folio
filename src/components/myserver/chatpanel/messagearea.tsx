import React, {useContext} from 'react'

const MessageArea: React.FC = ({currChannel}) => {
  return (
    <div className="">
      <p>
        <span class="hash">#</span> {currChannel}
      </p>
    </div>
  )
}

export default MessageArea