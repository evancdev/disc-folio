import React, {useState} from 'react'
import { dragHandler } from '../utils/drag'
import { ChevronDown } from 'lucide-react'


const LeftCol: React.FC = () => 
{
  // Initial width = 250px
  const [width, setWidth] = useState(250)
  const handleMouseDown = (event: React.MouseEvent) => 
  {
    const initX = event.clientX
    const initWidth = width
    dragHandler(initX, initWidth, setWidth)
  }

  return (
    <div 
      className="flex flex-col bg-disc1 h-full relative overflow-hidden"
      style = {{width: `${width}px` }}
    >
      {/* Drag Resizing Handler */}
      <div
        className="absolute cursor-ew-resize right-0 h-full hover:bg-[#2A2A2D] w-1"
        onMouseDown={handleMouseDown}
      />
      
      {/* Server Name */}
      <div className="flex w-full h-12 border-b border-bcolor items-center justify-between px-4">
        <p className="left-3.25 font-bold tracking-wide"> 
          Evan's Portfolio
        </p>

        {/* Chervon Down */}
        <ChevronDown 
          className="w-4 h-4 text-white"
          role="button"
          aria-label="Open Server Options"
        />
      </div>
    </div>
  )
}

export default LeftCol