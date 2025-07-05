import React from 'react'
import QuestionMark from './icons/questionmark'

const TopBar: React.FC = () => 
{
  return (
    // Create the horizonal flexbox
    <div className="flex h-8 items-center relative">

      {/* Title*/}
      <p className="absolute text-[12px] font-[400] font-ggsanssemi left-1/2 -translate-x-1/2 tracking-wider">
        Evan's Portfolio
      </p>

      {/* Question Mark Icon*/}
      <div className="absolute flex bg-gtext w-[19px] h-[19px] rounded-full items-center justify-center right-4">
        <QuestionMark/>
      </div>
    </div>
  )
}

export default TopBar