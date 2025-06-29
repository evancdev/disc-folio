import React from 'react'
import QuestionMark from './icons/questionmark'

/*
The TopBar is a horizonal flexbox consists of:
  - Title (Centered)
  - Question Mark Icon (Far Right)
*/

const TopBar: React.FC = () => 
{
  return (
    // Create the horizonal flexbox
    <div className="flex h-8 px-4 items-center relative">

      {/* Title*/}
      <p className="text-[13px] font-[400] left-1/2 -translate-x-1/2 tracking-wider absolute">
        Evan's Portfolio
      </p>

      {/* Question Mark Icon*/}
      <div className="flex bg-gray-400 w-[19px] h-[19px] rounded-full items-center justify-center ml-auto">
        <QuestionMark/>
      </div>
    </div>
  )
}

export default TopBar