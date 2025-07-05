import React, {useState} from 'react'
import { dragHandler } from '../../utils/sidebar_drag'
import { ChevronDown } from 'lucide-react'
import Channels from './channels'


const SideBar: React.FC = () => {
  // Initial width = 250px
  const [width, setWidth] = useState(250)
  return (
    <div 
      className="flex flex-col bg-disc1 h-full font-bold tracking-wide overflow-hidden relative"
      style = {{width: `${width}px` }}
    >
      {/* Drag Resizing Handler */}
      <div
        className="absolute cursor-ew-resize right-0 h-full hover:bg-bcolor w-1"
        onMouseDown={dragHandler(width, setWidth)}
      />
      {/* Server Name */}
      <div className="border-b border-bcolor flex h-bar items-center px-sidebar overflow-hidden">
        <div className="flex-1 min-w-0">
          <p className="font-ggsanssemi truncate" title="Evan's Portfolio">
            Evan's Portfolio
          </p>
        </div>

        {/* Chervon Down */}
        <ChevronDown 
          className="ml-auto w-4 h-4 flex-shrink-0"
          role="button"
        />
      </div>

      {/* Channels */}
      <Channels/>
    </div>
  )
}

export default SideBar