/**
 * dragHandler
 * Sets up a mouse-based resizing interaction for horizontal resizing
 * @param initX - Initial mouse position when the dragging starts
 * @param initWidth - Initial width of the component when dragging starts
 * @param setWidth - A React state function (from 'useState') that updates the 
 * component's width
 * 
 * @precondition The function is inside an 'onMouseDown' handler
 * @postcondition The updated width is always between [190, 360]
 */

export function dragHandler
(
  // Properties
  initX: number,
  initWidth: number,
  setWidth: (newWidth: number) => void
)
{
  const onMouseMove = (moveEvent: MouseEvent) => 
  {
    const newWidth = initWidth + (moveEvent.clientX - initX)
    setWidth(Math.max(190, Math.min(newWidth, 360)))
  }

  const onMouseUp = () => 
  {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }

  document.body.style.userSelect = "none"
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
}