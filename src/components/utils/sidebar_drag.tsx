import React from 'react'

/**
 * Calculates the new width based on mouse movement, clamped to a min/max range.
 * 
 * @param initX - Initial X position of mouse
 * @param initWidth - Initial width of the component
 * @param currX - Current X position of mouse during drag
 * @returns A number between 190 and 360
 */
function getNewWidth(initX: number, initWidth: number, currX: number){
  const delta = currX - initX
  const newWidth = initWidth + delta
  return Math.max(192, Math.min(newWidth, 360))
}

/**
 * Sets up a drag handler that updates component width on mouse move.
 * 
 * @param width - Current width of the component
 * @param setWidth - React state setter function for width
 * @returns An onMouseDown handler to initiate resizing
 */
export function dragHandler(
  width: number,
  setWidth: (newWidth: number) => void
){
  return (event: React.MouseEvent) => 
  {
    const initX = event.clientX
    const initWidth = width

    const onMouseMove = (moveEvent: MouseEvent) => {
      setWidth(getNewWidth(initX, initWidth, moveEvent.clientX))
    }

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
      document.body.style.userSelect = 'auto'
    }

    document.body.style.userSelect = 'none'
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }
}
