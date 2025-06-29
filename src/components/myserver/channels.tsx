import React, {useState} from 'react'
import { dragHandler } from '../utils/drag'

const Channels: React.FC = () => 
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
      
      <div className="flex bg-disc1 w-full h-12 font-bold border-b border-bcolor items-center relative">
        <p className="absolute left-[14px]"> 
          Evan's Portfolio
        </p>
      </div>
    </div>
  )
}

export default Channels